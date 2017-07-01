const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');
const ColourLibrary = require('../models/colour-library');

// admin update password

// authanticate
router.post("/authenticate", (req, res, next) => {

  if(!req.query.siteAuthToken) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  } else if(req.query.siteAuthToken != config.siteAuthToken) {
    return res.status(403).json({error: "Unauthorized access, access denied"})
  } else {
    let userObject = {
      email: req.body.email,
      queryPassword: req.body.password,
    }

    User.getOne({email: userObject.email})
    .then(result => {
      userObject.storedHash = result.password
      userObject._id = result._id // used for signing tokens for use with localStorage on front-end
      return User.comparePassword(userObject)
    }).then(() => {
      const token = jwt.sign(userObject._id, config.secret, {expiresIn: 604800});
      return res.json({
        success: true,
        message: "Authentication successful",
        token: "JWT" + token,
        user: {
          email: userObject.email,
          _id: userObject._id,
          username: userObject.username
        }
      })
    }).catch(error => {
      res.json(error)
    })
  }
})

// delete user
router.delete("/:userId", (req, res, next) => {

  if(!req.get('Authorization')) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let jwt = jwt.verify(req.get('Authorization'), config.secret)

  if(jwt == undefined) {
    res.status(403).json({error: "Authorization token not valid"})
  } else {
    User.doesntExist({_id: jwt._id})
    .then(User.deleteOne({_id: jwt._id}))
    .then(ColourLibrary.deleteOne({_id: jwt._id}))
    .then(result => {
      res.json(result)
    }).catch(error => {
      res.json(error)
    })
  }
})

// get user by id
router.get("/:userId", (req, res, next) => {
  if(!req.get('Authorization')) {
    res.status(401).json({error: "Authorisation token not supplied"})
  }

  let jwt = jwt.verify(req.get('Authorization'), config.secret)

  if(jwt == undefined) {
    res.status(403).json({error: "Authorization token not valid"})
  } else {
    User.getOne({_id: jwt._id})
    .then(result => {
      res.json(result)
    }).catch(error => {
      res.json(error)
    })
  }
})

// get all users
router.get("", (req, res, next) => {

  if(!req.query.adminAuthToken) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  } else if(req.query.adminAuthToken != config.adminAuthToken) {
    return res.status(403).json({error: "Unauthorized access, access denied"})
  } else {
    User.getAll()
    .then(result => {
      res.json(result)
    }).catch(error => {
      res.json(error)
    })
  }

})

// register user
router.post("", (req, res, next) => {

  console.log(req.query.siteAuthToken)

  if(!req.query.siteAuthToken) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  } else if(req.query.siteAuthToken != config.siteAuthToken) {
    return res.status(403).json({error: "Unauthorized access, access denied"})
  } else {
    let createdAtDate = new Date().getTime() // define date for user creation

    let userObject = new User({
      createdAt: createdAtDate,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      username: req.body.username
    })

    User.doesntExist({username: userObject.username})
    .then(User.doesntExist({email: userObject.email}))
    .then(() => {
      return User.create(userObject)
    })
    .then(result => {
      console.log(result)
      let colourLibraryObject = new ColourLibrary({
        createdAt: new Date(),
        createdBy: result.user._id,
      })
      return ColourLibrary.create(colourLibraryObject)
    }).then(result => {
      return User.addColourLibrary(result)
    }).then(result => {
      res.json(result)
    }).catch(error => {
      res.json(error)
    })
  }
})

// update user
router.put("", (req, res, next) => {

  let userObject = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    _id: req.body._id
  }

  // check username to make sure it doesn't already exist except in the case of it being the updaters current username
  User.getOne({username: userObject.username})
  .then(result => {
    if(result._id != userObject._id) {
      return Promise.reject(res.json({success: false, message: "Username already taken"}))
    } else {
      return User.getOne({email: userObject.email})
    }
  }).then(result => {
    if(result != null && result.email != userObject.email) {
      return Promise.reject(res.json({success: false, message: "Email address already registered"}))
    } else {
      return User.updateUser(userObject)
    }
  }).then(result => {
    res.json(result)
  }).catch(error => {
    res.json(error)
  })
})

// update password
router.post("/updatepassword", (req, res, next) => {

  let userObject = {
    _id: req.body._id,
    queryPassword: req.body.currentPassword,
    newPassword: req.body.newPassword
  }

  User.getOne({_id: userObject._id})
  .then(result => {
    userObject.storedHash = result.password
    return User.comparePassword(userObject)
  })
  .then(() => {
    return User.updatePassword(userObject)
  })
  .then(result => {
    console.log(result)
    res.json(result)
  }).catch(error => {
    res.json(error)
  })
})

module.exports = router;

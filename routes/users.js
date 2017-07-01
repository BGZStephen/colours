const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');
const ColourLibrary = require('../models/colour-library');

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

    let userId;

    User.getOne({email: userObject.email})
    .then(result => {
      userObject.storedHash = result.password
      userObject._id = result._id // used for signing tokens for use with localStorage on front-end
      userId = result._id
      return User.comparePassword(userObject)
    }).then(() => {
      const token = jwt.sign({userId: userId}, config.secret, {expiresIn: 604800});
      return res.json({
        success: true,
        message: "Authentication successful",
        token: token,
        user: {
          email: userObject.email,
          _id: userObject._id,
          username: userObject.username
        }
      })
    }).catch(error => {
      console.log(error)
      res.statusMessage = error
      res.status(500).send(error)
    })
  }
})

// delete user
router.delete("/:userId", (req, res, next) => {

  if(!req.get('Authorization')) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let verifiedJwt = jwt.verify(req.get('Authorization'), config.secret)

  if(verifiedJwt == undefined) {
    res.status(403).json({error: "Authorization token not valid"})
  } else {
    User.doesntExist({_id: jwt._id})
    .then(User.deleteOne({_id: jwt._id}))
    .then(ColourLibrary.deleteOne({_id: jwt._id}))
    .then(result => {
      res.sendStatus(200)
    }).catch(error => {
      console.log(error)
      res.statusMessage = error
      res.status(500).send(error)
    })
  }
})

// get user by id
router.get("/:userId", (req, res, next) => {
  if(!req.get('Authorization')) {
    res.status(401).json({error: "Authorisation token not supplied"})
  }

  let verifiedJwt = jwt.verify(req.get('Authorization'), config.secret)

  if(verifiedJwt == undefined) {
    res.status(403).json({error: "Authorization token not valid"})
  } else {
    User.getOne({_id: verifiedJwt.userId})
    .then(result => {
      res.status(200).json(result)
    }).catch(error => {
      console.log(error)
      res.statusMessage = error
      res.status(500).send(error)
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
      res.status(200).json(result)
    }).catch(error => {
      console.log(error)
      res.statusMessage = error
      res.status(500).send(error)
    })
  }

})

// register user
router.post("", (req, res, next) => {

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
    .then(result => {
      console.log(result)
      return User.doesntExist({email: userObject.email})
    })
    .then(() => {
      return User.create(userObject)
    })
    .then(result => {
      let colourLibraryObject = new ColourLibrary({
        createdAt: new Date(),
        createdBy: result.user._id,
      })
      return ColourLibrary.create(colourLibraryObject)
    }).then(result => {
      return User.addColourLibrary(result)
    }).then(result => {
      res.sendStatus(200)
    }).catch(error => {
      console.log(error)
      res.statusMessage = error
      res.status(500).send(error)
    })
  }
})

// update password
router.put("/:userId", (req, res, next) => {

  // used to determine if it's a profile update or password update
  let updateType = req.body.type

  if(updateType == "profile") {
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
        return Promise.reject({error: "Username already taken"})
      } else {
        return User.getOne({email: userObject.email})
      }
    }).then(result => {
      if(result != null && result.email != userObject.email) {
        return Promise.reject({error: "Email address already registered"})
      } else {
        return User.updateUser(userObject)
      }
    }).then(result => {
      res.sendStatus(200)
    }).catch(error => {
      console.log(error)
      res.statusMessage = error.error
      res.status(500).send(error)
    })

    // if not a profile update, check if it's a password update
  } else if (updateType == "password") {
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
      res.sendStatus(200)
    }).catch(error => {
      console.log(error)
      res.statusMessage = error
      res.status(500).send(error)
    })
  }
})

module.exports = router;

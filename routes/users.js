const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Counter = require('../models/counter');

// admin update password

// authanticate
router.post("/authenticate", (req, res, next) => {

  let userObject = {
    email: req.body.email,
    queryPassword: req.body.password,
  }

  User.getOne({email: userObject.email})
  .then(result => {
    if(result == null) {
      return Promise.reject(res.json({success: false, message: "Incorrect email address or password"}))
    } else {
      userObject.storedHash = result.password
      userObject.userId = result.userId // used for signing tokens for use with localStorage on front-end
      return User.comparePassword(userObject)
    }
  }).then(result => {
    if(result == false) {
      return Promise.reject(res.json({success: false, message: "Incorrect email address or password"}))
    } else {
      const token = jwt.sign(userObject, config.secret, {expiresIn: 604800});
      return res.json({
        success: true,
        message: "Authentication successful",
        token: "JWT" + token,
        user: {
          email: userObject.email,
          userId: userObject.userId,
          username: userObject.username
        }
      })
    }
  }).catch(error => {
    console.log(error)
  })
})

// delete user
router.post("/deleteOne", (req, res, next) => {
  let userObject = {
    userId: req.body.userId
  }

  User.getOne(userObject)
  .then(result => {
    if(result == null) {
      return Promise.reject(res.json({success: false, message: "User not found"}))
    } else {
      return User.deleteOne(userObject)
    }
  }).then(result => {
    if(JSON.parse(result).n == 1) {
      return res.json({success: true, message: "User deleted successfully"})
    }
  }).catch(error => {
    console.log(error)
  })
})

// get user by id
router.post("/getById", (req, res, next) => {
  let userObject = {
    userId: req.body.userId
  }

  User.getOne(userObject)
  .then(result => {
    if(result == null) {
      return res.json({success: false, message: "User not found"})
    } else {
      return res.json(result)
    }
  })
})

// get user by username
router.post("/getByUsername", (req, res, next) => {
  let userObject = {
    username: req.body.username
  }

  User.getOne(userObject)
  .then(result => {
    if(result == null) {
      return res.json({success: false, message: "User not found"})
    } else {
      return res.json(result)
    }
  })
})

// get user by email
router.post("/getByEmail", (req, res, next) => {
  let userObject = {
    email: req.body.email
  }

  User.getOne(userObject)
  .then(result => {
    if(result == null) {
      return res.json({success: false, message: "User not found"})
    } else {
      return res.json(result)
    }
  })
})

// get all users
router.get("/getAll", (req, res, next) => {
  User.getAll()
  .then(result => {
    if(result.length < 1) {
      return res.json({success: false, message: "No users found"})
    } else {
      return res.json(result)
    }
  })
})

// register user
router.post("/register", (req, res, next) => {
  let createdAtDate = new Date().getTime() // define date for user creation

  let userObject = new User({
    createdAt: createdAtDate,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    username: req.body.username
  })

  let counterQuery = { // set counter to call for assigning unique id
    name: "userId"
  }

  Counter.getOne(counterQuery)
  .then(result => {
    if(result == null) {
      return Promise.reject(res.json({success: false, message: "Unable to retrieve user counter"}))
    } else {
      userObject.userId = result.count
      let usernameQuery = {username: userObject.username}
      return User.getOne(usernameQuery)
    }
  }).then(result => {
    if(result != null) {
      return Promise.reject(res.json({success: false, message: "Username already exists"}))
    } else {
      let emailQuery = {email: userObject.email}
      return User.getOne(emailQuery)
    }
  }).then(result => {
    if(result != null) {
      return Promise.reject(res.json({success: false, message: "Email already exists"}))
    } else {
      return User.create(userObject)
    }
  }).then(result => {
    let newCount = userObject.userId += 1;
    let counterIncrementQuery = {
      count: newCount,
      name: "userId"
    }
    return Counter.increment(counterIncrementQuery)
  }).then(result => {
    if(result.n >= 1) {
      return res.json({success: true, message: "User created successfully"})
    }
  }).catch(error => {
    console.log(error)
  })

})

// update user
router.post("/update", (req, res, next) => {

  let userObject = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    userId: req.body.userId
  }

  // check username to make sure it doesn't already exist except in the case of it being the updaters current username
  User.getOne({username: userObject.username})
  .then(result => {
    if(result != null && result.userId != userObject.userId) {
      return Promise.reject(res.json({success: false, message: "Username already taken"}))
    } else {
      User.getOne({email: userObject.email})
    }
  }).then(result => {
    if(result != null && result.email != userObject.email) {
      return Promise.reject(res.json({success: false, message: "Email address already registered"}))
    } else {
      return User.updateUser(userObject)
    }
  }).then(result => {
    if(result.nModified == 0) {
      res.json({success: true, message: "Nothing to update"})
    } else if(result.nModified >= 1) {
      res.json({success: true, message: "User updated successfully"})
    }
  })
})

// update password
router.post("/updatepassword", (req, res, next) => {

  let userObject = {
    userId: req.body.userId,
    queryPassword: req.body.currentPassword,
    newPassword: req.body.newPassword
  }

  User.getOne({userId: userObject.userId})
  .then(result => {
    if(result == null) {
      return Promise.reject(res.json({success: false, message: "Failed to retrieve user"}))
    } else {
      userObject.storedHash = result.password
      return User.comparePassword(userObject)
    }
  }).then(result => {
    if(result == false) {
      return Promise.reject(res.json({success: false, message: "Current password entry doesn't match stored password"}))
    } else {
      return User.updatePassword(userObject)
    }
  }).then(result => {
    if(result.nModified >= 1) {
      return res.json({success: true, message: "Password updated successfully"})
    } else {
      return Promise.reject(res.json({success: false, message: "Password update failed"}))
    }
  }).catch(error => {
    console.log(error)
  })
})

module.exports = router;

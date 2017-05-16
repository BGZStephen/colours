const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Counter = require('../models/counter');

// admin update password

// delete user

// get user by id
router.post("/getById", (req, res, next) => {
  let userObject = {
    userId: req.body.userId
  }

  User.getOne(userObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "User not found"})
    }
  })
})

// get user by username
router.post("/getByUsername", (req, res, next) => {
  let userObject = {
    username: req.body.username
  }

  User.getOne(userObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "User not found"})
    }
  })
})

// get user by email
router.post("/getByEmail", (req, res, next) => {
  let userObject = {
    email: req.body.email
  }

  User.getOne(userObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "User not found"})
    }
  })
})

// get all users
router.get("/getAll", (req, res, next) => {
  User.getAll(userObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "User not found"})
    }
  })
})

// register user
router.post("/register", (req, res, next) => {
  let createdAtDate = new Date().getTime() // define date for user creation

  let userObject = new User({
    createdAt: createdAtDate,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email
  })

  let counterQuery = { // set counter to call for assigning unique id
    name: "userId"
  }

  Counter.getOne(counterQuery, (err, callback) => {
    if(err) throw(err)
    if(!callback) {
      res.json({success: false, message: "Unable to retrieve user counter"})
    } else {
      userObject.userId = callback.count
      let usernameQuery = {
        username: userObject.username
      }
      User.getOne(usernameQuery, (err, callback) => {
        if(callback) {
          res.json({success: false, message: "Username already exists"})
        } else {
          let emailQuery = {
            email: userObject.email
          }
          User.getOne(emailQuery, (err, callback) => {
            if(callback) {
              res.json({success: false, message: "Email already exists"})
            } else {
              User.create(userObject, (err, callback) => {
                if(!callback) {
                  res.json({success: false, message: "User creation failed"})
                } else {
                  let newCount = userObject.userId + 1;
                  let counterIncrementQuery = {
                    count: newCount,
                    name: "userId"
                  }
                  Counter.increment(counterIncrementQuery, (err, callback) => {
                    if(!callback) {
                      res.json({success: false, message: "Counter increment failed"})
                    } else {
                      res.json({success: true, message: "User creation success"})
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })

})

// update user

// user update password

module.exports = router;

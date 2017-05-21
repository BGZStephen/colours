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

  User.getOne({email: userObject.email}, (err, callback) => {
    if(err) throw(err)
    if(!callback) {
      res.json({success: false, message: "Incorrect email or password"})
    } else {
      userObject.storedHash = callback.password
      console.log(userObject.storedHash)
      User.comparePassword(userObject, (err, isMatch) => {
        if(err) throw(err)
        if(!isMatch) {
          res.json({success: false, message: "Incorrect email or password"})
        } else if(isMatch) {
          const token = jwt.sign(callback, config.secret, {
            expiresIn: 604800 // 1 week
          });
          res.json({
            success: true,
            message: "Authentication successful",
            token: "JWT" + token,
            user: {
              email: callback.email,
              userId: callback.userId,
              username: callback.username
            }
          })
        }
      })
    }
  })
})

// delete user
router.post("/deleteOne", (req, res, next) => {
  let userObject = {
    userId: req.body.userId
  }

  User.getOne({userId: userObject.userId}, (err, callback) => {
    if(err) throw(err)
    if(callback == null) {
      res.json({success: false, message: "UserID not found"})
    } else {
      User.deleteOne(userObject, (err, callback) => {
        if(err) throw(err)
        if(callback) {
          res.json({success: true, message: "User deleted"})
        } else {
          res.json({success: false, message: "Something went wrong, user not deleted"})
        }
      })
    }
  })
})

// get user by id
router.post("/getById", (req, res, next) => {
  let userObject = {
    userId: req.body.userId
  }

  User.getOne(userObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json(callback)
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
  User.getAll((err, callback) => {
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
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    username: req.body.username
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
                  let newCount = userObject.userId += 1;
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
router.post("/update", (req, res, next) => {

  let userObject = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    userId: req.body.userId
  }

  // check username to make sure it doesn't already exist except in the case of it being the updaters current username
  User.getOne({username: userObject.username}, (err, callback) => {
    if(err) throw(err)
    if(callback == null || callback.userId == userObject.userId) {
      User.getOne({email: userObject.email}, (err, callback) => {
        if(err) throw(err)
        if(callback == null || callback.userId == userObject.userId) {
          User.updateUser(userObject, (err, callback) => {
            if(err) throw(err)
            if(callback) {
              res.json({success: true, message: "User update successful"})
            } else {
              res.json({success: false, message: "Something went wrong, update failed"})
            }
          })
        } else {
          res.json({success: false, message: "Email already exists"})
        }
      })
    } else {
      res.json({success: false, message: "Username already exists"})
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

  User.getOne({userId: userObject.userId}, (err, callback) => {
    if(err) throw(err)
    if(callback == null) {
      res.json({success: false, message: "Failed to retrieve user"})
    } else {
      userObject.storedHash = callback.password
      console.log(userObject.storedHash)
      User.comparePassword(userObject, (err, isMatch) => {
        if(err) throw(err)
        if(!isMatch) {
          res.json({success: false, message: "Passwords didn't match"})
        } else if(isMatch) {
          User.updatePassword(userObject, (err, callback) => {
            if(err) throw(err)
            if(callback) {
              res.json({success: true, message: "Password Updated"})
            } else {
              res.json({success: false, message: "Failed to update password"})
            }
          })
        }
      })
    }
  })
})

module.exports = router;

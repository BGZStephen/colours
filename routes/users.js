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

  User.getOne(userObject, (err, callback) {
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

  User.getOne(userObject, (err, callback) {
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

  User.getOne(userObject, (err, callback) {
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

  User.getAll(userObject, (err, callback) {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "User not found"})
    }
  })
})

// register user

// update user

// user update password

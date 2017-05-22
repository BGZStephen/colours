const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Counter = require('../models/counter');

// save new Counter to db
router.post("/create", (req, res, next) => {
  counterQuery = { // used to check if counter already exists
    name: req.body.name
  }

  let counterObject = new Counter({
    count: 0,
    name: req.body.name
  })

  Counter.getOne(counterQuery).then(result => {
    if(result != null) {
      res.json({success: false, message: "Counter already exists"})
    } else {
      return Counter.create(counterObject)
    }
  }).then(result => {
    if(result != null) {
      res.json({success: true, message: "Counter created successfully"})
    }
  })
})

// delete one Counter from the db
router.post("/deleteByName", (req, res, next) => {
  counterQuery = {
    name: req.body.name
  }

  Counter.getOne(counterQuery, (err, callback) => {
    if(err) throw(err)
    if(callback == null) { // if the findOne call returns null, counter doesn't exist
      res.json({success: false, message: "Counter does not exist"})
    } else {
      Counter.deleteOne(counterQuery, (err, callback) => {
        if(err) throw(err)
        if(callback != null) { // if there is any response other than null, the counter has been deleted
          res.json({success: true, message: "Counter deleted"})
        } else { // if the counter is null, something has gone wrong
          res.json({success: false, message: "Failed to delete counter"})
        }
      })
    }
  })
})

// get all Counters from the db (used for admin purposes)
router.get("/getAll", (req, res, next) => {
  Counter.getAll((err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "Counter does not exist"})
    }
  })
})

// get one Counter from the database
router.post("/getByName", (req, res, next) => {
  counterQuery = {
    name: req.body.name
  }

  Counter.getOne(counterQuery, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "Counter does not exist"})
    }
  })
})

module.exports = router;

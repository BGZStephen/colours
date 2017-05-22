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

  Counter.getOne(counterQuery).then(result => {
    if(result == null) {
      return res.json({success: false, message: "Counter doesn't exist"})
    } else {
      return Counter.deleteOne(counterQuery)
    }
  }).then(result => {
    if(JSON.parse(result).n == 1) {
      return res.json({success: true, message: "Counter deleted successfully"})
    }
  })
})

// get all Counters from the db (used for admin purposes)
router.get("/getAll", (req, res, next) => {
  Counter.getAll()
  .then(result => {
    if(result.length < 1) {
      return res.json({success: false, message: "No counters found"})
    } else {
      return res.json(result)
    }
  })
})

// get one Counter from the database
router.post("/getByName", (req, res, next) => {
  counterQuery = {
    name: req.body.name
  }

  Counter.getOne(counterQuery).then(result => {
    if(result == null) {
      return res.json({success: false, message: "Counter doesn't exist"})
    } else {
      return res.json(result)
    }
  })
})

module.exports = router;

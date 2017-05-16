const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Counter = require('../models/counter');
const User = require('../models/user');
const Palette = require('../models/palette');

// save new Palette to db
router.post("/create", (req, res, next) => {
  let createdAtDate = new Date().getTime() // define date for user creation

  let paletteObject = new Palette({
    createdAt: createdAtDate,
    createdBy: req.body.userId,
    name: req.body.name
  })

  counterQuery = { // used to check if counter already exists
    name: "paletteId"
  }

  Counter.getOne(counterQuery, (err, callback) => {
    if(err) throw(err)
    if(!callback) {
      res.json({success: false, message: "Unable to retrieve palette counter"})
    } else {
      paletteObject.paletteId = callback.count
      Palette.create(paletteObject, (err, callback) => {
        if(err) throw(err)
        if(!callback) {
          res.json({success: false, message: "Palette creation failed"})
        } else {
          User.addPalette(paletteObject, (err, callback) => {
            if(err) throw(err)
            if(!callback) {
              res.json({success: false, message: "Failed to add Palette"})
            } else {
              let newCount = paletteObject.paletteId += 1;
              let counterIncrementQuery = {
                count: newCount,
                name: "paletteId"
              }
              Counter.increment(counterIncrementQuery, (err, callback) => {
                if(!callback) {
                  res.json({success: false, message: "Counter increment failed"})
                } else {
                  res.json({success: true, message: "Palette creation success"})
                }
              })
            }
          })
        }
      })
    }
  })
})

// get by id
router.post("/getById", (req, res, next) => {
  let paletteObject = {
    paletteId: req.body.paletteId
  }

  Palette.getOne(paletteObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "Failed to retrieve Palette"})
    }
  })
})

// get by user
router.post("/getByUserId", (req, res, next) => {
  let paletteObject = {
    userId: req.body.userId
  }

  Palette.getByUserId(paletteObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "Failed to retrieve Palette"})
    }
  })
})

module.exports = router;

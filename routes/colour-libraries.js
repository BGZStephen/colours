const express = require('express');
const router = express.Router();
const config = require('../config/database');
const ColourLibrary = require('../models/colour-library');

// get users colour library
router.post("/getByUserId", (req, res, next) => {

  let colourLibraryObject = {
    _id: req.body._id
  }

  ColourLibrary.getOne(colourLibraryObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    res.json(error)
  })
})

module.exports = router;

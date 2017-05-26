const express = require('express');
const router = express.Router();
const config = require('../config/database');
const ColourLibrary = require("../models/colour-library")

router.post("/create", (req, res, next) => {
  let colourLibraryObject = new ColourLibrary({
    createdAt: new Date(),
    createdBy: req.body._id,
  })

ColourLibrary.create(colourLibraryObject)
  .then(result => {
    console.log(result)
  }).catch(error => {
    console.log(error)
  })
})

module.exports = router;

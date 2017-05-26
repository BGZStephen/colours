const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Colour = require('../models/colours')
const Palette = require('../models/palette')
const ColourLibrary = require('../models/colour-library')

router.post("/createForLibrary", (req, res, next) => {
  let colourObject = new Colour({
    createdAt: new Date(),
    createdBy: req.body.createdBy,
    hex: req.body.hex
  })

  Colour.create(colourObject)
  .then(result => {
    if(result != null) {
      return ColourLibrary.addColourToLibrary(colourObject)
    }
  }).then(result => {
    if(result.nModified >= 1 ){
      return res.json({success: true, message: "Added colour to library"})
    } else {
      console.log(result)
      return Promise.reject(res.json({success: false, message: "Failed to add colour to library"}))
    }
  })
  .catch(error => {
    console.log(error)
  })
})

router.post("/createForPalette", (req, res, next) => {
  let colourObject = new Colour({
    createdAt: new Date(),
    createdBy: req.body.createdBy,
    hex: req.body.hex
  })

  let paletteObject = {
    paletteId: req.body.paletteId
  }

  Colour.create(colourObject)
  .then(result => {
    if(result != null) {
      return Palette.addColourToPalette(colourObject, paletteObject)
    }
  }).then(result => {
    if(result.nModified >= 1 ){
      return res.json({success: true, message: "Added colour to palette"})
    } else {
      console.log(result)
      return Promise.reject(res.json({success: false, message: "Failed to add colour to palette"}))
    }
  })
  .catch(error => {
    console.log(error)
  })
})

// delete paletteItem
router.post("/deleteFromLibrary", (req, res, next) => {
  let colourObject = {
    createdBy: req.body.createdBy,
    colourId: req.body.colourId
  }

  ColourLibrary.deleteColourFromLibrary(colourObject)
  .then(result => {
    if(result.nModified == 0) {
      return res.json({success: false, message: "Failed to delete Colour (does it exist?)"})
    } else {
      return res.json({success: true, message: "Colour removed from library."})
    }
  })
})

// delete paletteItem
router.post("/deleteFromPalette", (req, res, next) => {
  let paletteObject = {
    paletteId: req.body.paletteId,
    colourId: req.body.colourId
  }

  Palette.deleteColourFromPalette(paletteObject)
  .then(result => {
    if(result.nModified == 0) {
      return res.json({success: false, message: "Failed to delete Colour (does it exist?)"})
    } else {
      return res.json({success: true, message: "Colour removed from palette."})
    }
  })
})

module.exports = router;

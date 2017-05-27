const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Colour = require('../models/colour')
const Palette = require('../models/palette')
const PaletteItem = require('../models/palette-item')
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
    paletteId: req.body.paletteId,
  }

  Colour.create(colourObject)
  .then(result => {
    if(result != null) {
      let paletteItemObject = new PaletteItem({
        createdAt: new Date(),
        createdBy: req.body.createdBy,
        colour: {
          createdAt: result.createdAt,
          createdBy: result.createdBy,
          hex: result.hex
        },
        description: req.body.description
      })
      return PaletteItem.createPaletteItem(paletteItemObject, paletteObject)
    }
  }).then(result => {
    if(result == null) {
      Promise.reject({success: false, message: "Failed to create PaletteItem"})
    } else {
      return Palette.addPaletteItem(result, paletteObject)
    }
  }).then(result => {
    if(result.nModified == 0) {
      return Promise.reject(res.json({success: false, message: "Failed to add PaletteItem to Palette"}))
    } else {
      return res.json({success: true, message: "Colour successfully added to palette"})
    }
    ColourLibrary.addColourToLibrary(colourObject)
  })
  .catch(error => {
    console.log(error)
  })
})

// delete colour from Library
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

// delete paletteItem from Palette
router.post("/deleteFromPalette", (req, res, next) => {
  let paletteItemObject = {
    paletteId: req.body.paletteId,
    paletteItemId: req.body.paletteItemId
  }

  Palette.deletePaletteItem(paletteItemObject)
  .then(result => {
    if(result.nModified == 0) {
      return res.json({success: false, message: "Failed to delete Colour (does it exist?)"})
    } else {
      return res.json({success: true, message: "Colour removed from palette."})
    }
  })
})

module.exports = router;

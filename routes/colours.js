const express = require('express');
const router = express.Router();
const config = require('../config');
const Colour = require('../models/colour')
const Palette = require('../models/palette')
const PaletteItem = require('../models/palette-item')
const ColourLibrary = require('../models/colour-library')

// create a Colour and add it to the users colour library
router.post("", (req, res, next) => {

  if(req.body.type == "library") {
    let colourObject = new Colour({
      createdAt: new Date(),
      createdBy: req.body.createdBy,
      hex: req.body.hex
    })


    Colour.create(colourObject)
    .then(result => {
      result.colour.createdBy = req.body.createdBy;
      // pushes the colour Object to the Colours array within the Colour Library
      return ColourLibrary.addColourToLibrary(result.colour)
    }).then(result => {
      res.json(result)
    })
    .catch(error => {
      res.json(error)
    })
  } else if(req.body.type == "palette") {
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
      // define the new PaletteItem which fits the corresponding schema
      let paletteItemObject = new PaletteItem({
        createdAt: new Date(),
        createdBy: req.body.createdBy,
        colour: {
          createdAt: result.colour.createdAt,
          createdBy: result.colour.createdBy,
          hex: result.colour.hex
        },
        description: req.body.description
      })
      //Create a colour and then add it to the newly created paletteItem
      return PaletteItem.createPaletteItem(paletteItemObject)
    }).then(result => {
      /*
      final backup function in the event that the colour is not already in the
      users library, this will ensure it's pushed there also
      */

      /*
      using the paletteId outlined in the paetteObject,
      push the newly created paletteItem to it
      */
      return Palette.addPaletteItem(result, paletteObject)
    }).then(result => {
      res.json(result)
    })
    .catch(error => {
      res.json(error)
    })
    ColourLibrary.addColourToLibrary(colourObject)
  }
})

// delete colour from Library
router.put("/colourId", (req, res, next) => {

  if(req.body.type == "library") {
    let colourObject = {
      createdBy: req.body.createdBy,
      colourId: req.body.colourId
    }

    ColourLibrary.deleteColourFromLibrary(colourObject)
    .then(result => {
      res.json(result)
    }).catch(error => {
      res.json(error)
    })
  } else if (req.body.type == "palette") {
    let paletteItemObject = {
      paletteId: req.body.paletteId,
      paletteItemId: req.body.paletteItemId
    }

    Palette.deletePaletteItem(paletteItemObject)
    .then(PaletteItem.deletePaletteItem({_id: paletteItemObject.paletteItemId}))
    .then(result => {
      res.json(result)
    }).catch(error => {
      res.json(error)
    })
  }
})

module.exports = router;

const express = require('express');
const router = express.Router();
const config = require('../config/database');
const User = require('../models/user');
const Palette = require('../models/palette');
const PaletteItem = require('../models/palette-item');

// create new Palette
router.post("/create", (req, res, next) => {

  let paletteObject = new Palette({
    createdAt: new Date(),
    createdBy: req.body.createdBy,
    description: req.body.description,
    name: req.body.name
  })

  Palette.create(paletteObject)
  .then(User.addPalette(paletteObject))
  .then(result => {
    res.json(result)
  }).catch(error => {
    res.json(error)
  })
})

// delete palette
router.post("/deleteOne", (req, res, next) => {
  let paletteObject = {
    paletteId: req.body.paletteId,
    userId: req.body.userId
  }

  let paletteQuery = {
    _id: req.body.paletteId,
  }

  Palette.getOne(paletteQuery)
  .then(result => {
    return [
      PaletteItem.deletePaletteItems(result.paletteItems),
      User.deletePalette(paletteObject)
    ]
  })
  .then(Palette.deleteOne(paletteQuery))
  .then(result => {
    res.json(result)
  }).catch(error => {
    res.json(error)
  })
})

// get by id
router.post("/getById", (req, res, next) => {
  let paletteObject = {
    _id: req.body._id
  }

  Palette.getOne(paletteObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    res.json(error)
  })
})

// get by user
router.post("/getByUserId", (req, res, next) => {
  let paletteObject = {
    createdBy: req.body.createdBy
  }

  Palette.getByUserId(paletteObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    res.json(error)
  })
})

// update
router.post("/update", (req, res, next) => {
  let paletteObject = {
    description: req.body.description,
    _id: req.body._id,
    name: req.body.name
  }

  let paletteQuery = {
    _id: req.body._id,
  }

  Palette.getOne(paletteQuery)
  .then(Palette.updatePalette(paletteObject)).then(result => {
    res.json(result)
  }).catch(error => {
    res.json(error)
  })
})

module.exports = router;

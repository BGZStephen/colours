const mongoose = require('mongoose');
const config = require('../config/database')
const PaletteItem = require('./palette-item')
const PaletteItemSchema = PaletteItem.schema

// counter Schema
const PaletteSchema = mongoose.Schema({
  createdAt: {
    required: true,
    type: Date
  },
  createdBy: {
    required: true,
    type: String
  },
  description: {
    type: String
  },
  paletteItems: [PaletteItemSchema],
  name: {
    required: true,
    type: String,
  }
})

const Palette = module.exports = mongoose.model('Palette', PaletteSchema)

// COLOURS MANAGEMENT

// add PaletteItem to Palette
module.exports.addPaletteItem = function(paletteItemObject, paletteObject) {
  return new Promise(resolve => {
    resolve(Palette.update({_id: paletteObject.paletteId}, {$push: {paletteItems: paletteItemObject}}))
  })
}

// remove paletteItem from Palette
module.exports.deletePaletteItem = function(paletteItemObject){
  return new Promise(resolve => {
    resolve(Palette.update({_id: paletteItemObject.paletteId}, {$pull: {paletteItems: {_id: paletteItemObject.paletteItemId}}}))
  })
}

// COLOURS MANAGEMENT END

// PALETTE MANAGEMENT

// save new Palette to db
module.exports.create = function(paletteObject) {
  return new Promise(resolve => {
    resolve(paletteObject.save())
  })
}

// get one palette
module.exports.getOne = function(paletteObject) {
  return new Promise(resolve => {
    resolve(Palette.findOne(paletteObject))
  })
}

// get palettes by userId
module.exports.getByUserId = function(paletteObject) {
  return new Promise(resolve => {
    resolve(Palette.find(paletteObject))
  })
}

// get all palettes
module.exports.getAll = function(paletteObject) {
  return new Promise(resolve => {
    resolve(Palette.find({}))
  })
}

// delete one palette
module.exports.deleteOne = function(paletteObject){
  return new Promise(resolve => {
    resolve(Palette.findOne(paletteObject).remove().exec())
  })
}

// update palette
module.exports.updatePalette = function(paletteObject){
  return new Promise(resolve => {
    resolve(Palette.update({_id: paletteObject.paletteId}, paletteObject))
  })
}

// PALETTE MANAGEMENT END

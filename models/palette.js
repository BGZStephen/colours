const mongoose = require('mongoose');
const config = require('../config/database')
const ColourSchema = require('./colours').schema

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
  colours: [ColourSchema],
  name: {
    required: true,
    type: String,
  }
})

const Palette = module.exports = mongoose.model('Palette', PaletteSchema)

// COLOURS MANAGEMENT

// add Colour to Library
module.exports.addColourToPalette = function(colourObject, paletteObject) {
  return new Promise(resolve => {
    resolve(Palette.update({_id: paletteObject.paletteId}, {$push: {colours: colourObject}}))
  })
}

// remove colour from palette
module.exports.deleteColourFromPalette = function(paletteObject){
  return new Promise(resolve => {
    resolve(Palette.update({_id: paletteObject.paletteId}, {$pull: {colours: {_id: paletteObject.colourId}}}))
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

// add palleteItem
module.exports.addPaletteItem = function(paletteObject){
  return new Promise(resolve => {
    resolve(Palette.update({_id: paletteObject.paletteId}, {$push: {paletteItems: paletteObject.paletteItem}}))
  })
}

// remove paletteItem
module.exports.deletePaletteItem = function(paletteObject){
  return new Promise(resolve => {
    resolve(Palette.update({_id: paletteObject.paletteId}, {$pull: {paletteItems: {paletteItemId: paletteObject.paletteItemId}}}))
  })
}

// update palette
module.exports.updatePalette = function(paletteObject){
  return new Promise(resolve => {
    resolve(Palette.update({_id: paletteObject.paletteId}, paletteObject))
  })
}

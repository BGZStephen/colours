const mongoose = require('mongoose');
const config = require('../config/database')

// counter Schema
const PaletteSchema = mongoose.Schema({
  createdAt: {
    required: true,
    type: Date
  },
  createdBy: {
    required: true,
    type: Number
  },
  description: {
    type: String
  },
  paletteId: {
    required: true,
    type: Number,
    unique: true
  },
  paletteItems: Array,
  name: {
    required: true,
    type: String,
  }
})

const Palette = module.exports = mongoose.model('Palette', PaletteSchema)

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
    resolve(Palette.update({paletteId: paletteObject.paletteId}, {$push: {paletteItems: paletteObject.paletteItem}}))
  })
}

// remove paletteItem
module.exports.deletePaletteItem = function(paletteObject){
  return new Promise(resolve => {
    resolve(Palette.update({paletteId: paletteObject.paletteId}, {$pull: {paletteItems: {paletteItemId: paletteObject.paletteItemId}}}))
  })
}

// update palette
module.exports.updatePalette = function(paletteObject){
  return new Promise(resolve => {
    resolve(Palette.update({paletteId: paletteObject.paletteId}, paletteObject))
  })
}

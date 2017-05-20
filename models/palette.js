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
  }
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
module.exports.create = function(paletteObject, callback) {
  paletteObject.save(callback)
}

// get one palette
module.exports.getOne = function(paletteObject, callback) {
  Palette.findOne(paletteObject, callback)
}

// get palettes by userId
module.exports.getByUserId = function(paletteObject, callback) {
  Palette.find(paletteObject, callback)
}

// get all palettes
module.exports.getAll = function(paletteObject, callback) {
  Palette.find({}, callback)
}

// delete one palette
module.exports.deleteOne = function(paletteObject, callback){
  Palette.findOne(paletteObject, callback).remove().exec()
}

// add palleteItem
module.exports.addPaletteItem = function(paletteObject, callback){
  Palette.update({paletteId: paletteObject.paletteId}, {$push: {paletteItems: paletteObject.paletteItem}}, callback)
}

// remove paletteItem
module.exports.deletePaletteItem = function(paletteObject, callback){
  Palette.update({paletteId: paletteObject.paletteId}, {$pull: {paletteItems: {paletteItemId: paletteObject.paletteItemId}}}, callback)
}

// update palette
module.exports.updatePalette = function(paletteObject, callback){
  Palette.update({paletteId: paletteObject.paletteId}, paletteObject, callback)
}

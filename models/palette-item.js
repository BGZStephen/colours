const mongoose = require('mongoose');
const config = require('../config/database')
const ColourSchema = require('./colour').schema
const Palette = require('./palette')
const User = require('./user')

const PaletteItemSchema = mongoose.Schema({
  createdAt: Date,
  createdBy: String,
  colour: ColourSchema,
  description: String
})

const PaletteItem = module.exports = mongoose.model('PaletteItem', PaletteItemSchema)

// COLOURS MANAGEMENT

// add Colour to Library
module.exports.createPaletteItem = function(paletteItemObject, paletteObject) {
  return new Promise((resolve, reject) => {
    paletteItemObject.save().then(result => {
      if(result == null) {
        reject({success: false, message: "Failed to create Palette Item"})
      } else {
        resolve(result)
      }
    })
  })
}

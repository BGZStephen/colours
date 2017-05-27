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

// add Colour to Palette
module.exports.createPaletteItem = function(paletteItemObject, paletteObject) {
  return new Promise((resolve, reject) => {
    // create / save the paletteItem to the paletteItems collection
    paletteItemObject.save().then(result => {
      if(result == null) {
        reject({success: false, message: "Failed to create Palette Item"})
      } else {
        resolve(result)
      }
    })
  })
}

/*
delete individual or multiple paletteItems
this function is loped when deleting a palette to ensure residual paletteItems
don't remain and clog up the collection
*/
module.exports.deletePaletteItem = function(paletteItemObject) {
  PaletteItem.findOne({_id: paletteItemObject._id}).remove().exec()
}

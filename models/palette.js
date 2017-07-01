const mongoose = require('mongoose');
const config = require('../config')
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
  return new Promise((resolve, reject) => {
    Palette.update({_id: paletteObject.paletteId}, {$push: {paletteItems: paletteItemObject}}).then(result => {
      if(result.nModified >= 1) {
        resolve({success: true, message: "Colour successfully added to palette"})
      } else {
        reject({success: false, message: "Failed to add PaletteItem to Palette"})
      }
    })
  })
}

// remove paletteItem from Palette
module.exports.deletePaletteItem = function(paletteItemObject){
  return new Promise((resolve, reject) => {
    Palette.update({_id: paletteItemObject.paletteId}, {$pull: {paletteItems: {_id: paletteItemObject.paletteItemId}}}).then(result => {
      if(result.nModified >= 1) {
        resolve({success: true, message: "PaletteItem sucessfully removed"})
      } else {
        reject({success: false, message: "Failed to remove PaletteItem"})
      }
    })
  })
}

// COLOURS MANAGEMENT END

// PALETTE MANAGEMENT

// save new Palette to db
module.exports.create = function(paletteObject) {
  return new Promise((resolve, reject) => {
    paletteObject.save().then(result => {
      if(result != null) {
        resolve({success: true, message: "Palette created successfully"})
      } else {
        reject({success: false, message: "Failed to create palette"})
      }
    })
  })
}

// get one palette
module.exports.getOne = function(paletteObject) {
  return new Promise((resolve, reject) => {
    Palette.findOne(paletteObject).then(result => {
      if(result != null) {
        resolve(result)
      } else {
        reject({success: false, message: "Failed to retrieve palette"})
      }
    })
  })
}

// get palettes by userId
module.exports.getByUserId = function(paletteObject) {
  return new Promise((resolve, reject) => {
    Palette.find(paletteObject).then(result => {
      if(result.length == 0) {
        reject({success: false, message: "No palettes found for user"})
      } else {
        resolve(result)
      }
    })
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
  return new Promise((resolve, reject) => {
    Palette.findOne(paletteObject).remove().then(result => {
      if(JSON.parse(result).n == 1) {
        resolve({success: true, message: "Palette deleted successfully"})
      } else {
        reject({success: false, message: "Palette deletion failed"})
      }
    })
  })
}

// update palette
module.exports.updatePalette = function(paletteObject){
  return new Promise((resolve, reject) => {
    Palette.update({_id: paletteObject.paletteId}, paletteObject).then(result => {
      if(result.nModified == 0) {
        resolve({success: true, message: "Nothing to update"})
      } else if(result.nModified >= 1) {
        resolve({success: true, message: "User updated successfully"})
      }
    })
  })
}

// PALETTE MANAGEMENT END

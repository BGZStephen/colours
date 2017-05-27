const mongoose = require('mongoose');
const config = require('../config/database')
const ColourSchema = require('./colour').schema
const User = require('./user')

const ColourLibrarySchema = mongoose.Schema({
  createdAt: Date,
  createdBy: String,
  colours: [ColourSchema]
})

const ColourLibrary = module.exports = mongoose.model('ColourLibrary', ColourLibrarySchema)

// COLOURS MANAGEMENT

// add Colour to Library
module.exports.addColourToLibrary = function(colourObject) {
  return new Promise(resolve => {
    ColourLibrary.findOne({hex: colourObject.hex}).then(result => {
      if(result != null) {
        resolve(result)
      } else {
        resolve(ColourLibrary.update({createdBy: colourObject.createdBy}, {$push: {colours: colourObject}}))
      }
    })
  })
}

//remove Colour from Library
module.exports.deleteColourFromLibrary = function(colourObject) {
  return new Promise(resolve => {
    resolve(ColourLibrary.update({createdBy: colourObject.createdBy}, {$pull: {colours: {_id: colourObject.colourId}}}))
  })
}

// COLOURS MANAGEENT END

// create new colourLibrary to db
module.exports.create = function(colourLibraryObject) {
  return new Promise(resolve => {
    colourLibraryObject.save().then(result => {
      if(result == null) {
        reject({success: false, message: "Failed to create Colour Library"})
      } else {
        resolve(User.update({_id: result.createdBy},{colourLibrary: result._id}))
      }
    })
  })
}

// delete colour library (only used when removing a user from the system, if used otherwise, it will break a profile)
module.exports.deleteOne = function(colourLibraryObject){
  return new Promise(resolve => {
    resolve(ColourLibrary.findOne({createdBy: colourLibraryObject._id}).remove().exec())
  })
}

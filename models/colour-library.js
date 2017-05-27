const mongoose = require('mongoose');
const config = require('../config/database')
const ColourSchema = require('./colour')
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
    // check if colour already exists to avoid duplication in the colours collection
    ColourLibrary.findOne({hex: colourObject.hex}).then(result => {
      if(result != null) {
        // if colour already exists, simply return it
        resolve(result)
      } else {
        // else, push it to the colour library
        resolve(ColourLibrary.update({createdBy: colourObject.createdBy}, {$push: {colours: colourObject}}))
      }
    })
  })
}

//remove Colour from Library
module.exports.deleteColourFromLibrary = function(colourObject) {
  return new Promise(resolve => {
    // remove colour from Library, this doesn't delete the colour from the collection
    resolve(ColourLibrary.update({createdBy: colourObject.createdBy}, {$pull: {colours: {_id: colourObject.colourId}}}))
  })
}

// COLOURS MANAGEENT END

// create new colourLibrary
module.exports.create = function(colourLibraryObject) {
  return new Promise(resolve => {
    /*
    Create a colour library which is unique to each user, upon successful
    creation, push the library ID to the user object
    */
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

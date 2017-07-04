const mongoose = require('mongoose');
const config = require('../config')
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
  return new Promise((resolve, reject) => {
    // check if colour already exists to avoid duplication in the colours collection
    ColourLibrary.findOne({'colours.hex': colourObject.hex}).then(result => {
      if(result != null) {
        // if colour already exists, simply return it
        resolve()
      } else {
        // else, push it to the colour library
        ColourLibrary.update({createdBy: colourObject.createdBy}, {$push: {colours: colourObject}}).then(result => {
          if(result.nModified >= 1 ){
            resolve()
          } else {
            reject("Failed to add colour to library")
          }
        })
      }
    })
  })
}


//remove Colour from Library
module.exports.deleteColour = function(colourLibraryObject) {
  return new Promise((resolve, reject) => {
    // remove colour from Library, this doesn't delete the colour from the collection
    console.log(colourLibraryObject._id)
    ColourLibrary.update({_id: colourLibraryObject._id}, {$pull: {colours: {hex: colourLibraryObject.hex}}}).then(result => {
      if(result.nModified == 0) {
        reject("Failed to delete Colour (does it exist?)")
      } else {
        resolve()
      }
    })
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
        reject("Failed to create Colour Library")
      } else {
        resolve(result)
      }
    })
  })
}

// delete colour library (only used when removing a user from the system, if used otherwise, it will break a profile)
module.exports.deleteOne = function(colourLibraryObject){
  return new Promise(resolve => {
    ColourLibrary.findOne({createdBy: colourLibraryObject._id}).remove().exec().then(result => {
      if(JSON.parse(result).n == 1) {
        resolve()
      } else {
        reject("Failed to delete Colour Library")
      }
    })
  })
}

// delete colour library (only used when removing a user from the system, if used otherwise, it will break a profile)
module.exports.getOne = function(colourLibraryObject){
  return new Promise((resolve, reject) => {
    ColourLibrary.findOne({_id: colourLibraryObject._id}).then(result => {
      if(result != null) {
        resolve(result)
      } else {
        reject("Failed to retrieve Colour Library")
      }
    })
  })
}

const mongoose = require('mongoose');
const config = require('../config/database')
const ColourSchema = require('./colours').schema
const User = require('./user')

const ColourLibrarySchema = mongoose.Schema({
  createdAt: Date,
  createdBy: String,
  colours: [ColourSchema]
})

const ColourLibrary = module.exports = mongoose.model('ColourLibrary', ColourLibrarySchema)

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

// delete one user from the db
module.exports.deleteOne = function(colourLibraryObject){
  return new Promise(resolve => {
    resolve(ColourLibrary.findOne({createdBy: colourLibraryObject._id}).remove().exec())
  })
}

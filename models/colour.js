const mongoose = require('mongoose');
const config = require('../config/database')
const ColourLibrary = require('./colour-library')

const ColourSchema = mongoose.Schema({
  createdAt: Date,
  createdBy: String,
  hex: String
})

const Colour = module.exports = mongoose.model('Colour', ColourSchema)

/*
Create colour and store to the colour collection
Duplication checking in place to ensure only unique items get saved
*/
module.exports.create = function(colourObject) {
  return new Promise(resolve => {
    // check if colour already exists
    Colour.findOne({hex: colourObject.hex}).then(result => {
      if(result != null) {
        // if so, simply return the colour
        resolve(result)
      } else {
        // if not, add the colour to the colours collection
        resolve(colourObject.save())
      }
    })
  })
}

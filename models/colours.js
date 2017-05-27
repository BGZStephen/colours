const mongoose = require('mongoose');
const config = require('../config/database')
const ColourLibrary = require('./colour-library')

const ColourSchema = mongoose.Schema({
  createdAt: Date,
  createdBy: String,
  hex: String
})

const Colour = module.exports = mongoose.model('Colour', ColourSchema)

// find one colour by hex value
module.exports.create = function(colourObject) {
  return new Promise(resolve => {
    Colour.findOne({hex: colourObject.hex}).then(result => {
      if(result != null) {
        resolve(result)
      } else {
        resolve(colourObject.save())
      }
    })
  })
}

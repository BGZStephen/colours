const mongoose = require('mongoose');
const config = require('../config/database')
const ColourLibrary = require('./colour-library')

const ColourSchema = mongoose.Schema({
  createdAt: Date,
  createdBy: String,
  hex: String,
  rgb: {
    red: Number,
    green: Number,
    blue: Number
  }
})

const Colour = module.exports = mongoose.model('Colour', ColourSchema)

// create new Colour - used in conjunction with adding colour to palette and / or libraries. Not used on it's own
module.exports.create = function(colourObject) {
  return new Promise(resolve => {
    resolve(colourObject.save())
  })
}

const mongoose = require('mongoose');
const config = require('../config/database')

// counter Schema
const CounterSchema = mongoose.Schema({
  count: {
    required: true,
    type: Number,
  },
  name: {
    required: true,
    type: String,
    unique: true
  }
})

const Counter = module.exports = mongoose.model('Counter', CounterSchema)

// save new Counter to db
module.exports.create = function(counterObject, callback) {
  counterObject.save(callback)
}

// delete one Counter from the db
module.exports.deleteOne = function(counterObject, callback){
  Counter.findOne(counterObject, callback).remove().exec()
}

// get all Counters from the db (used for admin purposes)
module.exports.getAll = function(callback){
  Counter.find({}, callback)
}

// get one Counter from the database
module.exports.getOne = function(counterObject, callback) {
  Counter.findOne(counterObject, callback)
}

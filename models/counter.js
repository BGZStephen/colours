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
module.exports.create = function(counterObject) {
  return new Promise(resolve => {
      resolve(counterObject.save())
  })
}

// delete one Counter from the db
module.exports.deleteOne = function(counterObject){
  return new Promise(resolve => {
    resolve(Counter.findOne(counterObject).remove())
  })
}

// get all Counters from the db (used for admin purposes)
module.exports.getAll = function(callback){
  return new Promise(resolve => {
    resolve(Counter.find({}))
  })
}

// get one Counter from the database
module.exports.getOne = function(counterObject) {
  return new Promise(resolve => {
    resolve(Counter.findOne(counterObject))
  })
}

// increment counter
module.exports.increment = function(counterObject, callback) {
  return new Promise(resolve => {
    resolve(Counter.update({name: counterObject.name}, {count: counterObject.count}))
  })
}

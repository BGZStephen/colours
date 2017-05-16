const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// user Schema
const UserSchema = mongoose.Schema({
  createdAt: {
    type: Date,
  },
  email: {
    required: true,
    type: String,
  },
  palettes: {
    type: Array,
  },
  projects: {
    type: Array,
  },
  userId: {
    required: true,
    type: String,
    unique: true
  },
  username: {
    required: true,
    type: String,
    unique: true
  },
})

const User = module.exports = mongoose.model('User', UserSchema)

// push palette to user palettes array
module.exports.addPalette = function(palleteObject, callback) {

}

// pull palette to user palettes array
module.exports.deletePalette = function(palleteObject, callback) {

}

// push project to user projects array
module.exports.addProject = function(projectObject, callback) {

}

// pull project to user projects array
module.exports.deleteProject = function(projectObject, callback) {

}

// save new User to db
module.exports.create = function(userObject, callback) {

}

// delete one user from the db
module.exports.deleteOne = function(userObject, callback){

}

// get all users from the db (used for admin purposes)
module.exports.getAll = function(userObject, callback){
  User.find({}, callback)
}

// get one user from the database
module.exports.getOne = function(userObject, callback) {
  User.findOne(userObject, callback)
}

// compare password to the bcrypt encrypted password within the db
module.exports.comparePassword = function(userObject, callback) {

}

// update password, used in association with comparePassword to check if submitted passwords match before actioning
module.exports.updatePassword = function(userObject, callback) {

}

// update a users profile within the db
module.exports.updateUser = function(userObject, callback) {

}

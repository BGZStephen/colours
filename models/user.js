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
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String
  },
  palettes: {
    type: Array,
  },
  projects: {
    type: Array,
  },
  username: {
    required: true,
    type: String,
    unique: true
  }
})

const User = module.exports = mongoose.model('User', UserSchema)

// push palette to user palettes array
module.exports.addPalette = function(palleteObject) {
  return new Promise(resolve => {
    resolve(User.update({_id: palleteObject.createdBy}, {$push: {palettes: {_id: palleteObject._id}}}))
  })
}

// pull palette to user palettes array
module.exports.deletePalette = function(palleteObject) {
  return new Promise(resolve => {
    resolve(User.update({_id: palleteObject._id}, {$pull: {palettes: {_id: palleteObject._id}}}))
  })
}

// push project to user projects array
// module.exports.addProject = function(projectObject, callback) {
//
// }

// pull project to user projects array
// module.exports.deleteProject = function(projectObject, callback) {
//
// }

// save new User to db
module.exports.create = function(userObject) {
  return new Promise(resolve => {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(userObject.password, salt)
    userObject.password = hash;
    resolve(userObject.save())
  })
}

// delete one user from the db
module.exports.deleteOne = function(userObject){
  return new Promise(resolve => {
    resolve(User.findOne(userObject).remove().exec())
  })
}

// get all users from the db (used for admin purposes)
module.exports.getAll = function(userObject){
  return new Promise(resolve => {
    resolve(User.find({}))
  })
}

// get one user from the database
module.exports.getOne = function(userObject) {
  return new Promise(resolve => {
    resolve(User.findOne(userObject))
  })
}

// compare password to the bcrypt encrypted password within the db
module.exports.comparePassword = function(userObject) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(userObject.queryPassword, userObject.storedHash).then(res => {
      resolve(res)
    })
  })
}

// update password, used in association with comparePassword to check if submitted passwords match before actioning
module.exports.updatePassword = function(userObject) {
  return new Promise(resolve => {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(userObject.newPassword, salt)
    resolve(User.update({_id: userObject.userId},{password: hash}))
  })
}

// update a users profile within the db
module.exports.updateUser = function(userObject) {
  return new Promise(resolve => {
    resolve(User.update({_id: userObject.userId}, userObject))
  })
}

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config')
const PaletteSchema = require('./palette').schema

// user Schema
const UserSchema = mongoose.Schema({
  colourLibrary: String,
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
  palettes: [PaletteSchema],
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
module.exports.addColourLibrary = function(colourLibraryObject) {
  return new Promise((resolve, reject) => {
    User.update({_id: colourLibraryObject.createdBy},{colourLibrary: colourLibraryObject._id}).then(result => {
      if(result.nModified >= 1) {
        resolve()
      } else {
        reject("Failed to add Colour Library to user")
      }
    })
  })
}

// push palette to user palettes array
module.exports.addPalette = function(palleteObject) {
  return new Promise((resolve, reject) => {
    User.update({_id: palleteObject.createdBy}, {$push: {palettes: {_id: palleteObject._id}}}).then(result => {
      if(result.n != null) {
        resolve()
      } else {
        reject("Failed to add Palette to user")
      }
    })
  })
}

// pull palette from user palettes array
module.exports.deletePalette = function(palleteObject) {
  return new Promise((resolve, reject) => {
    User.update({_id: palleteObject.userId}, {$pull: {palettes: {_id: palleteObject.paletteId}}}).then(result => {
      if(result.nModified == 0) {
        reject("Failed to pull palette from user Palettes")
      } else {
        resolve()
      }
    })
  })
}

// save new User to db
module.exports.create = function(userObject) {
  return new Promise((resolve, reject) => {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(userObject.password, salt)
    userObject.password = hash;
    userObject.save().then(result => {
      if(result != null) {
        resolve(result)
      } else {
        reject("User creation failed")
      }
    })
  })
}

// delete one user from the db
module.exports.deleteOne = function(userObject){
  return new Promise((resolve, reject) => {
    User.findOne(userObject).remove().exec().then(result => {
      if(JSON.parse(result).n == 1) {
        resolve()
      } else {
        reject("Failed to delete user")
      }
    })
  })
}

// get one user from the database
module.exports.doesntExist = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne(userObject).then(result => {
      console.log(result)
      if(result == null) {
        resolve()
      } else {
        reject("User already exists")
      }
    })
  })
}

// get all users from the db (used for admin purposes)
module.exports.getAll = function(userObject){
  return new Promise((resolve, reject) => {
    User.find({}).then(result => {
      if(result.length > 1) {
        resolve(result)
      } else {
        reject("No users found")
      }
    })
  })
}

// get one user from the database
module.exports.getOne = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne(userObject).then(result => {
      if(result == null) {
        reject("User not found")
      } else {
        resolve(result)
      }
    })
  })
}

// compare password to the bcrypt encrypted password within the db
module.exports.comparePassword = function(userObject) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(userObject.queryPassword, userObject.storedHash).then(res => {
      if(res == true) {
        resolve()
      } else {
        reject("Incorrect password")
      }
    })
  })
}

// update password, used in association with comparePassword to check if submitted passwords match before actioning
module.exports.updatePassword = function(userObject) {
  return new Promise((resolve, reject) => {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(userObject.newPassword, salt)
    User.update({_id: userObject._id},{password: hash}).then(result => {
      if(result.nModified >= 1) {
        resolve()
      } else {
        reject("Password update failed")
      }
    })
  })
}

// update a users profile within the db
module.exports.updateUser = function(userObject) {
  return new Promise((resolve, reject) => {
    User.update({_id: userObject.userId}, userObject).then(result => {
      if(result.nModified == 0) {
        resolve()
      } else if(result.nModified >= 1) {
        resolve()
      } else {
        reject("User update failed")
      }
    })
  })
}

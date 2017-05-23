const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Counter = require('../models/counter');
const User = require('../models/user');
const Palette = require('../models/palette');

// add paletteItem
router.post("/addPaletteItem", (req, res, next) => {
  let paletteObject = {
    paletteId: req.body.paletteId,
    paletteItem: {
      description: req.body.paletteItem.description,
      hex: req.body.paletteItem.hex,
    },
  }

  counterQuery = { // used to check if counter already exists
    name: "paletteItemId"
  }

  Counter.getOne(counterQuery, (err, callback) => {
    if(err) throw(err)
    if(!callback) {
      res.json({success: false, message: "Unable to retrieve paletteItem counter"})
    } else {
      paletteObject.paletteItem.paletteItemId = callback.count
      Palette.addPaletteItem(paletteObject, (err, callback) => {
        if(err) throw(err)
        if(!callback) {
          res.json({success: false, message: "Failed to add PaletteItem"})
        } else {
          let newCount = paletteObject.paletteItem.paletteItemId += 1;
          let counterIncrementQuery = {
            count: newCount,
            name: "paletteItemId"
          }
          Counter.increment(counterIncrementQuery, (err, callback) => {
            if(!callback) {
              res.json({success: false, message: "Counter increment failed"})
            } else {
              res.json({success: true, message: "PaletteItem added"})
            }
          })
        }
      })
    }
  })
})

// delete paletteItem
router.post("/deletePaletteItem", (req, res, next) => {
  let paletteObject = {
    paletteId: req.body.paletteId,
    paletteItemId: req.body.paletteItemId
  }

  Palette.deletePaletteItem(paletteObject, (err, callback) => {
    if(err) throw(err)
    if(callback.nModified == 0) {
      res.json({success: false, message: "Failed to delete PaletteItem"})
    } else {
      res.json({success: true, message: "PaletteItem deletion success"})
    }
  })
})

// create new Palette
router.post("/create", (req, res, next) => {
  let createdAtDate = new Date().getTime() // define date for user creation

  let paletteObject = new Palette({
    createdAt: createdAtDate,
    createdBy: req.body.userId,
    description: req.body.description,
    name: req.body.name
  })

  counterQuery = { // used to check if counter already exists
    name: "paletteId"
  }

  Counter.getOne(counterQuery)
  .then(result => {
    paletteObject.paletteId = result.count
    if(result == null) {
      return Promise.reject({success: false, message: "Unable to retrieve palette counter"})
    } else {
      return Palette.create(paletteObject)
    }
  }).then(result => {
    if(result.length == 0) {
      return Promise.reject({success: false, message: "Palette creation failed"})
    } else {
      return User.addPalette(paletteObject)
    }
  }).then(result => {
    if(result.nModified == 0) {
      return Promise.reject({success: false, message: "Failed to add palette to user"})
    } else {
      let newCount = paletteObject.paletteId += 1;
      let counterIncrementQuery = {
        count: newCount,
        name: "paletteId"
      }
      return Counter.increment(counterIncrementQuery)
    }
  }).then(result => {
    if(result.n >= 1) {
      return res.json({success: true, message: "Palette created successfully"})
    }
  }).catch(error => {
    console.log(error)
  })



  // User.addPalette(paletteObject)
  //
  // let newCount = paletteObject.paletteId += 1;
  // let counterIncrementQuery = {
  //   count: newCount,
  //   name: "paletteId"
  // }
  // Counter.increment(counterIncrementQuery)
  //
  // Counter.getOne(counterQuery, (err, callback) => {
  //   if(err) throw(err)
  //   if(!callback) {
  //     res.json({success: false, message: "Unable to retrieve palette counter"})
  //   } else {
  //     paletteObject.paletteId = callback.count
  //     Palette.create(paletteObject, (err, callback) => {
  //       if(err) throw(err)
  //       if(!callback) {
  //         res.json({success: false, message: "Palette creation failed"})
  //       } else {
  //         User.addPalette(paletteObject, (err, callback) => {
  //           if(err) throw(err)
  //           if(!callback) {
  //             res.json({success: false, message: "Failed to add Palette"})
  //           } else {
  //             let newCount = paletteObject.paletteId += 1;
  //             let counterIncrementQuery = {
  //               count: newCount,
  //               name: "paletteId"
  //             }
  //             Counter.increment(counterIncrementQuery, (err, callback) => {
  //               if(!callback) {
  //                 res.json({success: false, message: "Counter increment failed"})
  //               } else {
  //                 res.json({success: true, message: "Palette creation success"})
  //               }
  //             })
  //           }
  //         })
  //       }
  //     })
  //   }
  // })
})

// delete palette
router.post("/deleteOne", (req, res, next) => {
  let paletteObject = {
    paletteId: req.body.paletteId,
    userId: req.body.userId
  }

  let paletteQuery = {
    paletteId: req.body.paletteId,
  }

  Palette.getOne(paletteObject)
  .then(result => {
    if(result == null) {
      return Promise.reject(res.json({success: false, message: "No Palette Found"}))
    } else {
      return User.deletePalette(paletteObject)
    }
  }).then(result => {
    if(result.nModified == 0) {
      return Promise.reject(res.json({success: false, message: "Failed to delete Palette"}))
    } else {
      Palette.deleteOne(paletteQuery)
    }
  }).then(result => {
    if(JSON.parse(result).n == 1) {
      return res.json({success: true, message: "User deleted successfully"})
    } else {
      return Promise.reject(res.json({success: false, message: "User deletion failed"}))
    }
  }).catch(error => {
    console.log(error)
  })
})

// get by id
router.post("/getById", (req, res, next) => {
  let paletteObject = {
    paletteId: req.body.paletteId
  }

  Palette.getOne(paletteObject)
  .then(result => {
    if(result == null) {
      res.json({success: false, message: "No Palette Found"})
    } else {
      res.json(callback)
    }
  })
})

// get by user
router.post("/getByUserId", (req, res, next) => {
  let paletteObject = {
    createdBy: req.body.createdBy
  }

  Palette.getByUserId(paletteObject)
  .then(result => {
    if(result.length < 1) {
      return Promise.reject(res.json({success: false, message: "No palettes found for user"}))
    } else {
      res.json(callback)
    }
  })
})

// update
router.post("/update", (req, res, next) => {
  let paletteObject = {
    description: req.body.description,
    paletteId: req.body.paletteId,
    name: req.body.name
  }

  let paletteQuery = {
    paletteId: req.body.paletteId,
  }

  Palette.getOne(paletteQuery)
  .then(result => {
    if(result == null) {
      return Promise.reject(res.json({success: false, message: "Failed to retrieve Palette"}))
    } else {
      return Palette.updatePalette(paletteObject)
    }
  }).then(result => {
    if(result.nModified == 0) {
      res.json({success: true, message: "Nothing to update"})
    } else if(result.nModified >= 1) {
      res.json({success: true, message: "User updated successfully"})
    }
  })
})

module.exports = router;

const express = require('express');
const router = express.Router();
const config = require('../config');
const ColourLibrary = require('../models/colour-library');

// delete colour from users library
router.put(":colourLibraryId", (req, res, next) => {

  if(!req.get('Authorization')) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let verifiedJwt = jwt.verify(req.get('Authorization'), config.secret)

  if(verifiedJwt == undefined) {
    res.status(403).json({error: "Authorization token not valid"})
  } else {
    let colourLibraryObject = {
      userId: req.body.userId,
      hex: req.body.hex
    }

    ColourLibrary.deleteColour(colourLibraryObject)
    .then(result => {
      res.json(result)
    }).catch(error => {
      res.json(error)
    })
  }
})

// get users colour library
router.get("/:colourLibraryId", (req, res, next) => {

  if(!req.get('Authorization')) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let verifiedJwt = jwt.verify(req.get('Authorization'), config.secret)

  if(verifiedJwt == undefined) {
    res.status(403).json({error: "Authorization token not valid"})
  } else {
    let colourLibraryObject = {
      _id: req.body._id
    }

    ColourLibrary.getOne(colourLibraryObject)
    .then(result => {
      res.json(result)
    }).catch(error => {
      res.json(error)
    })
  }
})


module.exports = router;

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config')

// conncet to database

mongoose.connect(config.database)

// on success
mongoose.connection.on('connected', () => {
  console.log("Connected to database: " + config.database)
})

// on error
mongoose.connection.on('error', (err) => {
  console.log("Error: " + err)
})

// set servr
const app = express()

// middleware

// cors setup
app.use(cors())

// body partser initialize
app.use(bodyParser.json())

// routing

// make routes accessible
const users = require("./routes/users")
const palettes = require("./routes/palettes")
const colours = require("./routes/colours")
const colourLibraries = require("./routes/colour-libraries")

app.use('/users', users)
app.use('/palettes', palettes)
app.use('/colours', colours)
app.use('/colour-libraries', colourLibraries)


// index route
app.get('*', (req, res) => {
  res.send('Invalid Endpoint')
})

// start server

// define port
const port = 3000

app.listen(port, () => {
  console.log("Server started, listening on port " + port)
})

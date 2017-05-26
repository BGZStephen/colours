const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database')

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

// static folder for public views
app.use(express.static(path.join(__dirname, 'public')))

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
app.use('/colourLibraries', colourLibraries)


// index route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint')
})

// default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// start server

// define port
const port = 3006

app.listen(port, () => {
  console.log("Server started, listening on port " + port)
})

require('dotenv').config()
require('./database')
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

// middlewares
app.use(cors())
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// start server 
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('\x1b[36m%s\x1b[0m', `\nConnected http://localhost:${PORT}/\n`)
})

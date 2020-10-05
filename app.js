require('dotenv').config()
const express = require('express')
const app = express()
// Src
const router = require('./src/routers/index')
// Packages
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
// Use packages
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
// Use router
app.use('/api/v1/', router)
// Use upload
app.use('./uploads', express.static('./uploads'))
// Run server
app.listen(process.env.PORT, () => {
  console.log(`Server ${process.env.PORT} is running`)
})

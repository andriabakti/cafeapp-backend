require('dotenv').config()
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./src/routes/index')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api/v1/', routes)

app.use('./uploads', express.static('./uploads'))
app.listen(process.env.PORT, () => {
  console.log(`Server ${process.env.PORT} is running`)
})

const express = require('express')
const productsRouter = require('./products')
const categoryRouter = require('./category')
const historyRouter = require('./history')
const usersRouter = require('./users')

const router = express.Router()

router
  .use('/products', productsRouter)
  .use('/categories', categoryRouter)
  .use('/histories', historyRouter)
  .use('/users', usersRouter)

module.exports = router

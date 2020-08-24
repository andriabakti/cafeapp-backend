const productsModels = require('../models/products')
const helpers = require('../helpers/helpers')
const redis = require('redis')
const client = redis.createClient(process.env.REDIS_PORT)

const products = {
  getAllProduct: (req, res) => {
    const sortdata = req.query.sort || 'id'
    const typeSort = req.query.typesort || 'ASC'
    const search = req.query.search
    const limit = req.query.limit || 9
    const offset = ((req.query.page || 1)-1) * limit
    productsModels.getAllProduct({sortdata, typeSort, search, limit, offset})
      .then((result) => {
        const resultProducts = result
        helpers.response(res, resultProducts, 200, null, req.paginations)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getProductById: (req, res) => {
    const id = req.params.id
    productsModels.getProductById(id)
      .then((result) => {
        const resultProducts = result

        client.set('allproduct', 60*60*12, JSON.stringify(resultProducts))
        helpers.response(res, resultProducts, 200, null)
      })
      .catch((err) => {
        console.log(err.message)
      })
  },
  insertProduct: (req, res) => {
    const { name, price, idCategory, status } = req.body
    const data = {
      name,
      price,
      image: `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`,
      idCategory,
      status,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    productsModels.insertProduct(data)
      .then((result) => {
        const resultProducts = result
        console.log(result)
        helpers.response(res, resultProducts, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateProduct: (req, res) => {
    const id = req.params.id
    const { name, price, image, idCategory, status } = req.body
    const data = {
      name,
      price,
      image,
      idCategory,
      status,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    productsModels.updateProduct(id, data)
      .then((result) => {
        const resultProducts = result
        console.log(result)
        helpers.response(res, resultProducts, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteProduct: (req, res) => {
    const id = req.params.id
    productsModels.deleteProduct(id)
      .then((result) => {
        const resultProducts = result
        helpers.response(res, resultProducts, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = products

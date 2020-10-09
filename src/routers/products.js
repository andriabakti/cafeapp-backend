const express = require('express')
const productsController = require('../controllers/products')
const router = express.Router()
const pagination = require('../middlewares/paginations').books
const {verifyAccess} = require('../middlewares/auth')
const {upload} = require('../middlewares/multer')
const redis = require('../middlewares/redis')

router
  .get('/', verifyAccess, redis.cacheGetAllProduct, pagination, productsController.getAllProduct)
  .get('/:id', verifyAccess, productsController.getProductById)
  .post('/', verifyAccess, redis.clearGetAllProduct, upload.single('image'), productsController.insertProduct)
  .patch('/:id', verifyAccess, upload.single('image'), productsController.updateProduct)
  .delete('/:id', verifyAccess, productsController.deleteProduct)

module.exports = router

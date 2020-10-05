const express = require('express')
const categoryController = require('../controllers/category')
const router = express.Router()

router
  .get('/', categoryController.getAllCategory)
  .get('/:id', categoryController.getCategoryById)
  .post('/', categoryController.insertCategory)
  .patch('/:id', categoryController.updateCategory)
  .delete('/:id', categoryController.deleteCategory)

module.exports = router

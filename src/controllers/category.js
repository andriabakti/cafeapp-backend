const categoryModels = require('../models/category')
const helpers = require('../helpers/helpers')

const category = {
  getAllCategory: (req, res) => {
    categoryModels.getAllCategory()
      .then((result) => {
        const resultCategory = result
        // res.json(resultCategory)
        helpers.response(res, resultCategory, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getCategoryById: (req, res) => {
    const id = req.params.id
    categoryModels.getCategoryById(id)
      .then((result) => {
        const resultCategory = result
        // res.json(resultCategory)
        helpers.response(res, resultCategory, 200, null)
      })
      .catch((err) => {
        console.log(err.message)
      })
  },
  insertCategory: (req, res) => {
    const { categoryName } = req.body
    const data = {
      categoryName,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    categoryModels.insertCategory(data)
      .then((result) => {
        const resultCategory = result
        console.log(result)
        // res.json(resultCategory)
        helpers.response(res, resultCategory, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateCategory: (req, res) => {
    const id = req.params.id
    const { categoryName } = req.body
    const data = {
      categoryName,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    categoryModels.updateCategory(id, data)
      .then((result) => {
        const resultCategory = result
        console.log(result)
        // res.json(resultCategory)
        helpers.response(res, resultCategory, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteCategory: (req, res) => {
    const id = req.params.id
    categoryModels.deleteCategory(id)
      .then((result) => {
        const resultCategory = result
        // res.json(resultCategory)
        helpers.response(res, resultCategory, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = category

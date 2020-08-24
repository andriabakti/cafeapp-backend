const historyModels = require('../models/history')
const helpers = require('../helpers/helpers')

const history = {
  getAllHistory: (req, res) => {
    historyModels.getAllHistory()
      .then((result) => {
        const resultHistory = result
        // res.json(resultHistory)
        helpers.response(res, resultHistory, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getHistoryById: (req, res) => {
    const id = req.params.id
    historyModels.getHistoryById(id)
      .then((result) => {
        const resultHistory = result
        // res.json(resultHistory)
        helpers.response(res, resultHistory, 200, null)
      })
      .catch((err) => {
        console.log(err.message)
      })
  },
  insertHistory: (req, res) => {
    const { item1, quantity1, totalPrice1, item2, quantity2, totalPrice2, item3, quantity3, totalPrice3, totalCost } = req.body
    const data = {
      item1,
      quantity1,
      totalPrice1,
      item2,
      quantity2,
      totalPrice2,
      item3,
      quantity3,
      totalPrice3,
      totalCost,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    historyModels.insertHistory(data)
      .then((result) => {
        const resultHistory = result
        console.log(result)
        // res.json(resultHistory)
        helpers.response(res, resultHistory, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateHistory: (req, res) => {
    const id = req.params.id
    const { item1, quantity1, totalPrice1, item2, quantity2, totalPrice2, item3, quantity3, totalPrice3, totalCost } = req.body
    const data = {
      item1,
      quantity1,
      totalPrice1,
      item2,
      quantity2,
      totalPrice2,
      item3,
      quantity3,
      totalPrice3,
      totalCost,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    historyModels.updateHistory(id, data)
      .then((result) => {
        const resultHistory = result
        console.log(result)
        // res.json(resultHistory)
        helpers.response(res, resultHistory, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteHistory: (req, res) => {
    const id = req.params.id
    historyModels.deleteHistory(id)
      .then((result) => {
        const resultHistory = result
        // res.json(resultHistory)
        helpers.response(res, resultHistory, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = history

const express = require('express')
const historyController = require('../controllers/history')
const router = express.Router()

router
  .get('/', historyController.getAllHistory)
  .get('/:id', historyController.getHistoryById)
  .post('/', historyController.insertHistory)
  .patch('/:id', historyController.updateHistory)
  .delete('/:id', historyController.deleteHistory)

module.exports = router

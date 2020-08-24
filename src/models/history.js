const connection = require('../configs/db')

const history = {
  getAllHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM history', (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  getHistoryById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM history WHERE id = ?', id, (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  insertHistory: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO history SET ?', data, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  updateHistory: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE history SET ? WHERE id = ?', [data, id], (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  deleteHistory: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM history WHERE id = ?', id, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  }
}

module.exports = history

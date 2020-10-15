const redis = require('redis')
const client = redis.createClient(process.env.REDIS_PORT)
const helpers = require('../helpers/helpers')

module.exports = {
    cacheGetAllProduct: (req, res, next) => {
        client.get('allproduct', (err, data) => {
            if(err) throw err
            if(req.query.search || req.query.sort) return next()
            if(data !== null) {
                helpers.response(res, JSON.parse(data), 200)
            } else {
                next()
            }
        })
    },
    clearGetAllProduct: (req, res, next) => {
        client.del('allproduct')
        next()
    }
}
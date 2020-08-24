const bcrypt = require('bcryptjs')
const helpers = require('../helpers/helpers')
const usersModel = require('../models/users')
const jwt = require('jsonwebtoken')

module.exports = {
    register: async (req, res) => {
        const {email, password, firstName, lastName} = req.body

        // const isUser = await usersModel.checkEmail(email)
        // validasi
        const data = {
            email,
            password,
            firstName,
            lastName,
            roleId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(data.password, salt, function(err, hash) {
                data.password = hash
                usersModel.register(data)
                .then((result) => {
                    helpers.response(res, result, 200, null)
                })
                .catch((err) => {
                    console.log(err)
                })
            })
        })
    },
    login: (req, res) => {
        const {email, password} = req.body
        usersModel.getUserbyEmail(email)
        .then((result) => {
            // validasi
            if (result.length <1) return elpers.response(res, {message: 'email not found !!'}, 200, null)
            const user = result[0]
            bcrypt.compare(password, user.password).then((resCompare) => {
                if(!resCompare) return helpers.response(res, {message: 'password is wrong !!'}, 200, null)
                const payload = {
                    id: user.id,
                    email: user.email,
                    roleId: user.roleid,

                }

                jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
                    user.token = token

                    delete user.password
                    delete user.createdAt
                    delete user.updatedAt
                    helpers.response(res, user, 200)
                })

            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
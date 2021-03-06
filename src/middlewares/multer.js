const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${new Date().toDateString()}-${new Date().getTime()}-${file.originalname}`)
    }
})

upload = multer({
    storage: storage,
    limits: {fileSize: 1 * 1024 * 1024}
})
module.exports = {
    upload
}

// validasi tipe
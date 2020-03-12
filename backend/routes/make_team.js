var express = require('express');
var router = express.Router();
const createError = require('http-errors')
const multer = require('multer');

router.post('/', multer({ dest: 'public/images/' }).single('team-image'), (req, res, next) => {
    console.log(req.body)
    console.log(req.file)
    res.status(204).send()
})

module.exports = router
const controller = require('../controller/file.controller')
const router = require("express").Router();

router.post('/upload-image', controller.uploadImage);

module.exports = router;

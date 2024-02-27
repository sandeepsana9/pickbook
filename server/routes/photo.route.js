const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photo.controller')

router.post('/upload', photoController.uploadPhoto);
module.exports = router;
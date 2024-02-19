const express = require('express');
const router = express.Router();
const authenticationController = require("../controllers/authentication.controller")


router.post('/signup', authenticationController.signUp)

module.exports = router;
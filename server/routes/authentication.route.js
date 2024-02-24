const express = require('express');
const router = express.Router();
const authenticationController = require("../controllers/authentication.controller")


router.post('/signup', authenticationController.signUp);
router.post('/login', authenticationController.login);

module.exports = router;
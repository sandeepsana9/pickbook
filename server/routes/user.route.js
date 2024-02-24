const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/:userId', userController.getUserDetails);
module.exports = router;
const express = require('express');
const router = express.Router();

router.use('/authentication', require('./authentication.route'));
router.use('/user', require('./user.route'));
router.use('/photo', require('.'))
module.exports = router;

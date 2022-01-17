const express = require('express');
const router = express.Router();
const path = 'user';
const controller = require('../controller/user');

router.get(
    `/${path}`,
    controller.getData
)

module.exports = router;
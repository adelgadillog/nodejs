const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const path = 'user';
const controller = require('../controller/user');

router.get(
    `/${path}`,
    controller.getData
);

router.post(
    `/${path}`,
    controller.postData
);

router.put(
    `/${path}/:id`,
    controller.updateSingle
);

router.delete(
    `/${path}/:id`,
    controller.deleteSingle
);

router.get(
    `/${path}/:id`,
    controller.findSingle
);

module.exports = router;
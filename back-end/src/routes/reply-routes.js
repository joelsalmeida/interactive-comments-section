const express = require('express');

const router = express.Router();
const controller = require('../controllers/reply-controller');

router.post('/', controller.create);

module.exports = router;

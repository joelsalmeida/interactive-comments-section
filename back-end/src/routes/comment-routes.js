const express = require('express');

const router = express.Router();
const controller = require('../controllers/comment-controller');

router.post('/', controller.create);
router.get('/', controller.get);

module.exports = router;

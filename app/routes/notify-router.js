const express = require('express');
const router = express.Router();

const notifyController = require('./../controllers/notify-controller');
router.post('/',notifyController);

module.exports = router;


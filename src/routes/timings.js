const timingsController = require('../controllers/timings');
const express = require('express');

const router = express.Router();

router.get('/', timingsController.getTimings);

module.exports = router;
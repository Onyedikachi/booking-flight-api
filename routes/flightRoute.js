const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/flights', controller.listAll);
router.get('/flights/:id', controller.listOne);

module.exports = router;


const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/flights', controller.listAll);
router.post('/flights', controller.create);

router.get('/flights/:id', controller.listOne);
router.delete('/flights/:id', controller.delete);

module.exports = router;


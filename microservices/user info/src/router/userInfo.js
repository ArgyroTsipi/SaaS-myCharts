const express = require('express');
const router = express.Router();

const getInfo = require('../controllers/getInfo');
const authenticateToken = require('../middlewares/authenticateToken');

router.get('/getInfo', authenticateToken, getInfo);


module.exports = router;
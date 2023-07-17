const express = require('express');
const router = express.Router();

const chartSave = require('../controllers/chartSaveController');
const chartFetch = require('../controllers/chartFetchController');
const countCharts = require('../controllers/countFetchController');
const authenticateToken = require('../middlewares/authenticateToken');

//saves the final chart configuration in the db
router.post('/save/:date',authenticateToken,chartSave);

//fetches the charts a user has saved
router.get('/fetch',authenticateToken,chartFetch);

//fetches the number of charts a user has
router.get('/countCharts',authenticateToken,countCharts);


module.exports = router;

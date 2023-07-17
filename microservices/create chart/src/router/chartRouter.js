const express = require('express');
const router = express.Router();

const chartCreate = require('../controllers/createChartController');


//endpoint that combines the data the user provided
//and the chart's configuration that is saved in the db to create
//the final chart configuration in order to display it in the frontend
router.post('/create',chartCreate);


module.exports = router;

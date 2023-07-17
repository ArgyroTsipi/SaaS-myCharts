const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.USER_CHARTS_PORT || 4003;
const db = require('./src/services/mongoDbConnector.js');
const chartRouter = require('./src/router/chartRouter.js');

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

db.connect();

app.options('*', cors())
app.use(cors());

app.use(bodyParser.json());

app.use('/user-chart', chartRouter);

app.listen(4003, () => {
    console.log(`> Users' Charts Server started on port ${port}`);
});
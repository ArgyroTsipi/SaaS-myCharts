const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4001;
const db = require('./src/services/mongoDbConnector.js');
const chartRouter = require('./src/router/chartRouter.js');

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

db.connect();

app.options('*', cors())
app.use(cors());

app.use(bodyParser.json());

app.use('/create-chart', chartRouter);

app.listen(4001, () => {
    console.log(`> Create Chart Server started on port ${port}`);
});
/*
 * This microservice has a database with user info. 
 * When a new user logs in this microservice recieves the new user info and stores it in db
 * When an old user logs in receives the new login date and updates the db
 * When a user purchases of creates a chart this microservices receives the (+-) credits and updates db  
 */

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const userInfoRouter = require('./src/router/userInfo.js');
const db = require('./src/services/mongoDbConnector.js');
const receiveUserInfoRabbit = require('./src/services/receiveUserInfoRabbit.js');
const receiveCreditsRabbit = require('./src/services/recieveCreditsRabbit.js');

db.connect();

app.options('*', cors())
app.use(cors());
app.use(bodyParser.json());

app.use('/userInfo', userInfoRouter);

receiveUserInfoRabbit('userInfoQueue');

receiveCreditsRabbit('creditsQueue');

app.listen(4004, () => {
    console.log(`> User Info Server started on port 4004`);
});
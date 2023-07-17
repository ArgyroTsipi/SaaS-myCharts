/*
 * Authentication Authorization Server
 * When a user logs in this server receives name, email and id.
 * Initially, it checks if the user is new. Then sends to frontend if the user is new or not
 * If the user is new, this server creates a new record and stores it to the db 
 * Then it sends the new user along with the login date and number of credits set to zero to user info server with rabbitMQ
 * If the user is old, it sends to user info server the new login date with rabbitMQ
 * Then a new access token and  refresh token are created based on object user{id, name, email}
 * These to tokens are sent back in the front. These two tokens are used for authorization
 * The refresh token is stored in a redis database, which was meant to be a cache for access tokens.
 * We did not manage to complete this. 
 * So we only use access token 
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

const authRouter = require('./src/router/auth.js');
const db = require('./src/services/mongoDbConnector.js');
const redisClient = require('./src/services/redisClient.js');

db.connect();

(async () => {
    await redisClient.connect();
})();
  
console.log("Connecting to the Redis");
  
redisClient.on("ready", () => {
    console.log('> Successfully conected to Redis');
});
  
redisClient.on("error", (err) => {
    console.log("Redis: Error in the Connection");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.options('*', cors())
app.use(cors());

app.use(bodyParser.json());

app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`> Auth Server started on port ${port}`);
});
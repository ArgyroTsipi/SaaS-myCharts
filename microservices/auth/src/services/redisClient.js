require('dotenv').config();

const redis = require('redis');
//const redisConfig = require('../configs/redis.config');

const redisConfig = {
    password: 'vP2JQma7quW9P4IW2zk4B22QU3eYCh7p',
    socket: {
        host: 'redis-10654.c57.us-east-1-4.ec2.cloud.redislabs.com',
        port: 10654
    }
}

// const redisConfig = {
//     host: 'redis',
//     port: 6379
//   }

const redisClient = redis.createClient(redisConfig);


module.exports = redisClient;
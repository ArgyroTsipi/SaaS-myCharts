require('dotenv').config();

const redis = {
    host: '127.0.0.1'||process.env.REDIS_HOST,
    port: '6379'||process.env.REDIS_PORT,
}

module.exports = redis;
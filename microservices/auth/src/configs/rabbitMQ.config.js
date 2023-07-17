require('dotenv').config();

const redis = {
    proto: 'amqp',
    host: '127.0.0.1'||process.env.RABBIT_HOST,
    port: '5672 '||process.env.RABBIT_PORT,
}

module.exports = redis;
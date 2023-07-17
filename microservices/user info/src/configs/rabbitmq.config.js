require('dotenv').config();

const web = {
    proto: 'amqp',
    host: process.env.RABBIT_HOST ||'127.0.0.1',
    port: process.env.RABBIT_PORT ,
}

module.exports = web;
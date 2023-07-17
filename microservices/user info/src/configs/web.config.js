require('dotenv').config();

const web = {
    proto: 'http',
    host: process.env.WEB_HOST ||'localhost',
    port: process.env.WEB_PORT || 3000,
}

module.exports = web;
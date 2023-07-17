require('dotenv').config();

const db = {
    name: 'mongodb',
    host: process.env.DB_HOST ||'127.0.0.1',
    port: process.env.DB_PORT || 27017,
}

module.exports = db;
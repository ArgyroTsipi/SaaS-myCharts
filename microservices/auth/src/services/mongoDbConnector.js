const mongoose = require("mongoose");
const config = require('../configs/db.config.js');
mongoose.Promise = global.Promise;
// const dbUrl = "mongodb://127.0.0.1/user";
//const dbUrl = config.name+'://'+config.host+':'+config.port+'/'+'user';

/*
 * Database configuration
 */ 

const dbUrl = "mongodb+srv://ntua:ntua@cluster0.muwsy1e.mongodb.net/auth?retryWrites=true&w=majority";
console.log(dbUrl);
const connect = async () => {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on("error", () => {
        console.log("could not connect");
    });
    db.once("open", () => {
        console.log('> Successfully connected to MongoDB');
    });
};
module.exports = { connect };
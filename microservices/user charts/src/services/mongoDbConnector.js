const mongoose = require("mongoose");
const config = require('../configs/db.config.js');
mongoose.Promise = global.Promise;
//const dbUrl = config.name+'://'+config.host+':'+config.port +'/UserCharts'
const dbUrl = "mongodb+srv://ntua:ntua@cluster0.muwsy1e.mongodb.net/userCharts?retryWrites=true&w=majority";
const connect = async () => {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on("error", () => {
        console.log("could not connect highchartsDisplay DB");
    });
    db.once("open", () => {
        console.log(`> Successfully connected to '${dbUrl}'`);
    });
};
module.exports = { connect };
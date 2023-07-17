const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserInfoSchema = new Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    lastLogin: {
        type: String,
    },
    numberOfCredits: {
        type: Number   
    }
});
const UserInfo = mongoose.model("User", UserInfoSchema);
module.exports = UserInfo;
const UserInfo = require("../models/userInfoModel");

/*
 * Retrieves user info from db based on user id
 */ 
const getUserInfo = (id) => {
  return (
    UserInfo.findOne({ 'id': id })
    .then(userInfo => {
      return userInfo;
    })
    .catch((err) => {
      console.error(err);   
    })
  )
}

module.exports=getUserInfo;


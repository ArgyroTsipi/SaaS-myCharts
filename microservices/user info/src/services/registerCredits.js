const userInfo = require('../models/userInfoModel');
/*
 * Update the number of credits of a user
 */
const registerCredits = (data) => {
    const {userId, numOfCredits} = data 
    
    userInfo.findOneAndUpdate(
        { id:userId } ,
        { $inc: { numberOfCredits: numOfCredits } }
    )
        .then()
        .catch(err => console.log(err))    
}
module.exports=registerCredits;
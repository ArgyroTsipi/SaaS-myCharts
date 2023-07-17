const userInfo = require('../models/userInfoModel');
/*
 * Code that updates user info 
 * if user new it creates a new record for that user
 * If user old it updates the user's login date
 */
const registerUserInfo = (data) => {
    const {firstTimeLogin} = data
    if(firstTimeLogin){
        const newUserInfo = userInfo({
            id: data.userInfo.id,
            name: data.userInfo.name,
            email: data.userInfo.email,
            lastLogin: data.timestamp,
            numberOfCredits: 0
        });
        newUserInfo.save()
            .then(console.log(`User ${newUserInfo.name} added successfully`))
            .catch(err => console.log(err))
    } else { 
        userInfo.findOneAndUpdate({id:data.userInfo.id},{lastLogin: data.timestamp})
            .then(updatedUser => console.log(updatedUser))
            .catch(err => console.log(err))
    }
}
module.exports=registerUserInfo;
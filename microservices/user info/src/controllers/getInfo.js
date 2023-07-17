const getUserInfo = require('../services/getUserInfo');

/*
 * Retrieves user info for a user. The selection is done with refresh token 
 * that gets decoded. Then we retrieve the user id and we query the mongodb database 
 */
const getInfo = async (req, res) =>{
    const ID = req.user_id
    console.log("User ID FROM TOKEN: ",ID);
    const userInfo = await getUserInfo(ID)
    console.log(userInfo);
    if(userInfo){
        res.send(userInfo)
    } else { 
        res.status(400).send({error: "No user found"});
    }
    
}

module.exports = getInfo;
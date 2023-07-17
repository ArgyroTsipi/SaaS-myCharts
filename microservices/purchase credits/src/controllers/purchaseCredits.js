const sendCreditsRabbit = require("../services/sendCreditsRabbit");


/* 
 * Gets the numbers of credits to be bought by the user
 * and sends it with rabbitMQ to user info server 
 */
const purchaseCredits = (req,res) => {
    const numOfCredits = req.params.numOfCredits
    console.log("Request for: ",numOfCredits);
    const message = {
        userId: req.user_id,
        numOfCredits: numOfCredits
    }
    try{
        sendCreditsRabbit(message);
    } 
    catch(err){
        console.log(err);
    }
    
    res.send({numOfCredits: numOfCredits})
}

module.exports=purchaseCredits;
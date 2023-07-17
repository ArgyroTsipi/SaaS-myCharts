sendMessageRabbitMQ = require('./sendMessageRabbitMQ');
/*
 * Sends new user or the update login date to user info 
 */
const sendUserInfoRabbit = (firstTimeLogin, data) => {
    let date_time = new Date(Date.now());
    let month = date_time.getMonth() + 1;
    let today = date_time.getFullYear() + '-' + month + '-' + date_time.getDate();

    let message = {};
    if(firstTimeLogin){
        const {google} = data;
        message = {firstTimeLogin:true, userInfo: google, timestamp: today};
        
    } else{
        
        const {google} = data 
        message = {firstTimeLogin:false, userInfo: google, timestamp: today};
    }
    sendMessageRabbitMQ(message, 'userInfoQueue', 'userInfoExchange');
}

module.exports=sendUserInfoRabbit;
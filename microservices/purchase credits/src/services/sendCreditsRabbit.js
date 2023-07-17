sendMessageRabbitMQ = require('./sendMessageRabbitMQ');

const sendCreditsRabbit = (message) => {
    sendMessageRabbitMQ(message, 'creditsQueue', 'creditsExchange');
}

module.exports=sendCreditsRabbit;
const configureRabbitMQ = require('./configureRabbitMQ.js')

async function sendMessageRabbitMQ(message, queue, exchangeName, ) {
    const channel = await configureRabbitMQ(exchangeName, queue);
    const routingKey = '';
    const exchangeOptions = { persistent: false };
    const messageOptions = { persistent: false };
    await channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(message)), exchangeOptions, messageOptions);
    console.log("I sent credits")
  }

module.exports=sendMessageRabbitMQ;
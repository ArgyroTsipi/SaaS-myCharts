const amqp = require('amqplib');

const registerUserInfo = require('./registerUserInfo');
const rabbit_config = require('../configs/rabbitmq.config');

async function receiveUserInfoRabbit(queueName) {
    const connection = await amqp.connect('amqps://xgpturee:HTaKUxbw3wMXsCL-1N7G6adN2o7jlKbx@stingray.rmq.cloudamqp.com/xgpturee');
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName, { durable: false });
    channel.consume(queueName, (message) => {
        const content = message.content.toString();
        const obj = JSON.parse(content);
        registerUserInfo(obj);
        channel.ack(message);
    });
}

module.exports = receiveUserInfoRabbit;
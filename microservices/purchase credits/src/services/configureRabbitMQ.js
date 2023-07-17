const amqp = require('amqplib');
const rabbit_config = require('../configs/rabbitmq.config');

/*
 *  Configuration of connection with CLoudAMQP
 *  Creation of queue
 */

async function configureRabbitMQ(exchangeName, queueName) {
  // Use config file
  const connection = await amqp.connect('amqps://xgpturee:HTaKUxbw3wMXsCL-1N7G6adN2o7jlKbx@stingray.rmq.cloudamqp.com/xgpturee');
  const channel = await connection.createChannel();
  const routingKey = ''
  // Create exchange and queue
  await channel.assertExchange(exchangeName, 'direct', { durable: false });
  await channel.assertQueue(queueName, { durable: false });
  await channel.bindQueue(queueName, exchangeName, '');
  return channel;
}

module.exports=configureRabbitMQ;
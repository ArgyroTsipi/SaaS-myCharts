const amqp = require('amqplib');

/*
 * Configuration of CloudAMPQ 
 */ 

async function configureRabbitMQ(exchangeName, queueName) {

  const connection = await amqp.connect('amqps://xgpturee:HTaKUxbw3wMXsCL-1N7G6adN2o7jlKbx@stingray.rmq.cloudamqp.com/xgpturee');
  const channel = await connection.createChannel();
  const routingKey = ''
  // Create exchange and queue
  await channel.assertExchange(exchangeName, 'direct', { durable: false });
  await channel.assertQueue(queueName, { durable: false });
  await channel.bindQueue(queueName, exchangeName, '');

  // Return channel to use for sending and receiving messages
  return channel;
}
module.exports=configureRabbitMQ;
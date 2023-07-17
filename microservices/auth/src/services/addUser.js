const User = require("../models/userModel");
const sendUserInfoRabbit = require("../services/sendUserInfoRabbit");

/*
 * Adds new user
 */
const addUser = (user) => {
    User.findOne({ 'google.id': user.id })
      .then((existingUser) => {
        if (existingUser) {
          console.log(`User ${user.name} already exists`);
          sendUserInfoRabbit(false, existingUser)
          return existingUser;
        }
  
        const newUser = new User({
            google: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
        newUser.save()
          .then(() => {
            console.log(`User ${user.name} added successfully`);
            sendUserInfoRabbit(true, newUser)
            return newUser;
          })
          .catch((err) => {
            console.error('Error adding user', err);
            next(err);
          });
      })
      .catch((err) => {
        console.error('Error', err);
      });
  }
  

module.exports = addUser;
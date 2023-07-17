const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const User = require("../models/userModel");
require('dotenv').config();

/* 
 * Check in auth db to see if a user is new or not
 * It sends this info to the frontend
 */

const  checkIfNewUser = async (req, res) => {
     const {id} = req.body;
     console.log(id);
    
     async function checkUserExists(id) {
      const user = await User.findOne({ 'google.id': id });
      return user !== null;
    }

    checkUserExists(id)
      .then((existingUser) => {
        if (existingUser) {
          res.send({newUser: false});  
        } else {
          console.log("new user");
            res.send({newUser: true})
        }})
      .catch((err) => {
        console.log(err)
        res.status(500).send({error: err.message});
      });
}

module.exports = checkIfNewUser;
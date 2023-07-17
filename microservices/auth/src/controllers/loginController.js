const {OAuth2Client} = require('google-auth-library');
const addUser = require('../services/addUser');
const generateAccessToken = require('../services/generateAccessToken');
const generateRefreshToken = require('../services/generateRefreshToken');
const client = new OAuth2Client(process.env.CLIENT_ID);
const redisClient = require('../services/redisClient');
require('dotenv').config();


/*
 * Generation of access and refresh tokens
 * The refresh token is stored in redis
 * Both of them are send in the frontend
 */
const  login = async (req, res) => {
    const user  = req.body;
    try{ 
        addUser(user);
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        //save refresh token 
        try{
            await redisClient.set(refreshToken, user.id);
            console.log({accessToken: accessToken, refreshToken: refreshToken});
            res.send({accessToken: accessToken, refreshToken: refreshToken});
        } catch(err) {
            res.status(500).send({error: err.message});
            console.log(err)
        }
        
    } catch(err){
        res.status(500).send({error: err.message});
        console.log(err)
    }
}

module.exports = login;
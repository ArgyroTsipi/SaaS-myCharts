const jwt = require('jsonwebtoken');
const generateAccessToken = require('../services/generateAccessToken');
const redisClient = require('../services/redisClient');
/*
 * Generates new access token when it expires based on refresh token
 * We did not use this function
 */ 
const  token = async (req, res) => {
    const {refreshToken} = req.body;
    if(refreshToken ===null) return res.sendStatus(401)
    //Check if refresh token exists in token db
    try{
        const userId = await redisClient.get(refreshToken);
        if(!userId){
            res.sendStatus(401).send({error: 'Invalid refresh token'});
        }
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if(err) return res.sendStatus(403)
            delete user.iat;
            const accessToken = generateAccessToken(user);
            res.send({accessToken:accessToken});
        })    
    
    } catch(err){
        res.sendStatus(500).json({ error: err.message });
    }
    
}

module.exports = token;
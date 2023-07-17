const redisClient = require('../services/redisClient');

/*
 * Deletes access token from redis in order to acheive complete logout
 * This feature is not used in the proper way as we did not manage to implement access token refresh token
 */ 

const logout = async (req, res) => {
    try{
        const {refreshToken} = req.body;
        await redisClient.del(refreshToken);
        res.sendStatus(204);
    } catch(error){
        res.sendStatus(500).send({error: error.message});
        //ERR_HTTP_HEADERS_SENT
    }
}

module.exports = logout;

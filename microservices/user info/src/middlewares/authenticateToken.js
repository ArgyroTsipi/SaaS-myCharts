const jwt = require('jsonwebtoken');

/*
 * Middleware that extracts user id from token and sets it to req.user_id.
 */
 
const authenticateToken = (req, res, next) => { 
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user_id = user.id
        next();
    })
}

module.exports = authenticateToken;
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res) => { 
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        res.send({user});
    });
}

module.exports = authenticateToken;
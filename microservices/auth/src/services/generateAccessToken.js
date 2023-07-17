const jwt = require('jsonwebtoken');

// const generateAccessToken = (user) => {
//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '45s'});
// }


const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

module.exports = generateAccessToken;
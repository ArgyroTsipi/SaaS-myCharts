const express = require('express');
const router = express.Router();

const login = require('../controllers/loginController');
const token = require('../controllers/tokenController');
const logout = require('../controllers/logoutController');
const authenticateToken = require('../controllers/authenticateToken');
const checkIfNewUser = require('../controllers/checkIfNewUser');

router.post('/token', token);

router.post('/login', login);

router.get('/authenticateToken', authenticateToken);

router.post('/logout', logout);

router.post('/checkIfNewUser', checkIfNewUser);

router.get('/test', ()=>{
    res.send('test');
})

module.exports = router;
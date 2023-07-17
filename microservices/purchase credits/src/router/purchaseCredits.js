const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');
const purchaseCredits = require('../controllers/purchaseCredits.js');

router.post('/purchaseCredits/:numOfCredits', authenticateToken, purchaseCredits);

router.get('/test', (req,res)=>{
    res.json({message: "hello"});
})

module.exports=router;
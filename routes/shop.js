const express = require('express');

const router = express.Router();
router.get('/',(req,res)=>{
    // console.log("In middleware 2");
    res.send('<h1>Hello from Shop</h1>')
});

module.exports = router;
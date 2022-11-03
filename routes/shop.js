const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();
router.get('/',(req,res)=>{
    // console.log("In middleware 2");
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});
router.get('/contactus',(req,res)=>{
   res.sendFile(path.join(rootDir, 'views', 'contact.html'))
});
router.post('/success',(req,res)=>{
    res.send("Form Submitted Successfully")
})
module.exports = router;


const express = require('express')
const router = express.Router();




router.get('/add-product',(req,res)=>{
    // console.log("In middleware 1");
    res.send('<form action="/admin/add-product" method="post"><input type="text" placeholder="title" name="title"><input type="number" placeholder="size" name="size"><button type="submit">Add Product</button></form>')
})

router.post('/add-product',(req,res)=>{
     console.log(req.body.title);
     console.log(req.body.size);

     res.redirect('/');
});

module.exports = router;
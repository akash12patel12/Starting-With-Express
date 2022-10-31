
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use('/add-product',(req,res)=>{
    // console.log("In middleware 1");
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

app.post('/product',(req,res)=>{
     console.log(req.body);
     res.redirect('/');
});

app.use('/',(req,res)=>{
    // console.log("In middleware 2");
    res.send('<h1>Hello from express</h1>')
})

app.listen(3000);

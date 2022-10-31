
const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/',(req,res)=>{
    res.send('<h1>Home Page</h1>')
})
app.use((req,res)=>{
    res.status(404).send('<h1> Page Not Found</h1>')
});
app.listen(3000);

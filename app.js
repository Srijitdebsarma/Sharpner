const express = require("express");
const bodyParser=require("body-parser")
const app = express();


const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended:true}))   //to parse the incoming req body

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);


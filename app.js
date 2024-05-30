const express = require("express");
const bodyParser=require("body-parser")
const app = express();
const path=require('path');

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended:true}))   //to parse the incoming req body
app.use(express.static(path.join(__dirname,"public")))
app.use("/admin",adminRoutes);
app.use("/shop",shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, "views","404.html"));
})

app.listen(3000);


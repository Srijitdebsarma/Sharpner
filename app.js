const express= require('express');
const app=express();
const ejsMate=require('ejs-mate');
const path = require('path');

//middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);  //for using ejsMates 

app.listen(4000, ()=>{   //running our app on 8080
    console.log('Server is listening on port 8080');
});

app.get("/",(req,res)=>{
    res.send("Welcome homWelcome to my Node Js project");
})
app.get("/home",(req,res)=>{
    res.send("Welcome home");
})
app.get("/about",(req,res)=>{
    res.send("Welcome to About Us page");
})
app.get("/node",(req,res)=>{
    res.send(" Welcome to my Node Js project");
})


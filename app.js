const express= require('express');
const app=express();
const ejsMate=require('ejs-mate');
const path = require('path');

//middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);  //for using ejsMates 

app.listen(8080, ()=>{   //running our app on 8080
    console.log('Server is listening on port 8080');
});

app.get("/",(req,res)=>{
    const multiplication=multiply(5,10);
    res.render("index.ejs",{multiplication});
})

const multiply=(num1,num2)=>{
    return (num1*num2);
}
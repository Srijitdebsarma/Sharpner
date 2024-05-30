const express = require("express");
const bodyParser=require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended:true}))   //to parse the incoming req body

app.use("/add_product", (req, res, next) => {
  console.log("From 2nd Middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" placeholder="Add a Product" name="title"><button>Add A Product</button></form>'
  ); //it can send the html
  next();
});

app.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})

app.use("/",(req,res,next)=>{
    res.send("<h1>Hello From Express</h1>");
})
app.listen(3000);


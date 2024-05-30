const express = require("express");

const router = express.Router();

router.use("/add_product", (req, res, next) => {
    res.send(
      '<form action="/product" method="POST"><input type="text" placeholder="Add a Product" name="title"><input type="number" placeholder="Add size..." name="size"><button>Add A Product</button></form>'
    ); //it can send the html
  });
  
router.post("/product",(req,res,next)=>{
      console.log(req.body);
      res.redirect("/");
  })

  module.exports=router;
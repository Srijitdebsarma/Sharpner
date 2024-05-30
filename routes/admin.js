const express = require("express");
const path=require('path');
const router = express.Router();

router.get("/add_product", (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'addProduct.html'));
  });
  
router.post("/add_product",(req,res,next)=>{
      console.log(req.body);
      res.redirect("/shop");
  })

  module.exports=router;
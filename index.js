const express= require('express');
const app=express();

app.listen(8080, ()=>{   //running our app on 8080
    console.log('Server is listening on port 8080');
});

app.get("/",(req,res)=>{
    res.send("Hello World");
})
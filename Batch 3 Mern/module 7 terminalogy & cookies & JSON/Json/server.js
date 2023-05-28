const express= require('express');
const jwt=require('jsonwebtoken');
const helmet=require('helmet');
require("dotenv").config();
const app=express();


const secretKey=process.env.secretkey;
const port=process.env.port

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(helmet());

const verifyToken=(req,res,next)=>{
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({message:"No token provided"})
    }
    jwt.verify(token,secretKey,(err,decoded)=>{
      if(err){
          return res.status(500).json({message:"Failed to authenticate"})
      }

      req.user = decoded;
      next();
    })
}

app.get('/login',(req, res)=>{
    let user={id:1,username:"Jauadul karim",test:"hi"}

    let token=jwt.sign (user, secretKey,{ expiresIn : 60*60 })

    res.json({token});
});


app.get('/protected',verifyToken,(req,res)=>{
    res.json({message:"protected endpoint reached!",user : req.user});

})






app.listen(port ,() =>{
    console.log(`this server is running ${port}`)
});

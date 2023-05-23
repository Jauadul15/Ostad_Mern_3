const express=require('express');
const helmet=require('helmet');
const {json} = require("express");
require('dotenv').config();
const indexRouter=require('./routes/index');
const movieRouter=require('./routes/movie');
const searchRouter=require('./routes/search');
const app=express();

const port=process.env.PORT;

app.use(express.static('public'));
app.use(json());
app.use(express.urlencoded({extended:false}))
app.use(helmet());


app.use((req, res, next)=>{
    if(req.query.api_key != '123456') {
        res.status(401);
        res.json({
            msg: "invalid API Key",
        })
    }
        else{
            next()
        }
})



app.use('/',indexRouter);
app.use('/movie',movieRouter);
app.use('/search',searchRouter);


app.listen(port,()=>{
    console.log("the port is running successful ")
})
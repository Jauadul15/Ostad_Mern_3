const express=require('express');
const helmet=require('helmet');
const {json} = require("express");
const app=express();
require('dotenv').config();
const indexRouter=require('./routes/index');
const movieRouter=require('./routes/movie');
const searchRouter=require('./routes/search');
//import from middleware
const { apiKey }= require('./middleware/index')


const port=process.env.PORT;

app.use(express.static('public'));
app.use(json());
app.use(express.urlencoded({extended:false}))
app.use(helmet());


app.use(apiKey);

app.use('/',indexRouter);
app.use('/movie',movieRouter);
app.use('/search',searchRouter);


app.listen(port,()=>{
    console.log("the port is running successful ")
})

const {readdirSync}=require("fs");
const express=require("express");
const app=express();
const hpp=require("hpp");
require("dotenv").config();
const helmet=require("helmet");
const mongoose=require("mongoose");
const multer=require("multer");
const morgan=require("morgan");
const cors=require("cors");
const bodyParser = require("body-parser");


//middlewares application lavel
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());




//routes middlewares

readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)));


//server

const port=process.env.PORT || 8000;

//connect to db & start server

mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
        app.listen(port,()=>{
            console.log(`server is running port ${port}`)
        })
    })
    .catch((err)=> console.log(err));


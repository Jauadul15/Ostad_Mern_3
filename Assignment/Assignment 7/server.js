const {readdirSync} =require("fs");
const path =require("path");
const express=require("express");
const helmet=require("helmet");
const mongoose=require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors=require("cors");

//power up the express in the app
const app=express();

//app middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());

//routes middlewares

readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)));

//server port
const port=process.env.PORT || 8000;

//connect DB and start server

mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
        app.listen(port,()=>{
            console.log(`server is running on port ${port}`);
        });
    })
    .catch((err)=>console.log(err))

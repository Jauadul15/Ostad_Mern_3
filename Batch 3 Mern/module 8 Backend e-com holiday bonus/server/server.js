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



/* a) The value of --primary-color that will be applied to the <body> element is blue because it is defined on the <body> element itself.

b) If a <p> element is a child of a <div> element, the value of --primary-color that will be applied to the <p> element is green because it is defined on the <div> element.

c) To ensure that the value of --primary-color from the :root selector is applied to the <p> element, you can define it on the <p> element itself or on its parent elements. CSS variables inherit their values from their parent elements by default. This means that if a CSS variable is defined on a parent element, it will be inherited by all of its child elements unless the value is overridden1*/
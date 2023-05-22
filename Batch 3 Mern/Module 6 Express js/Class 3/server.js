const express=require('express');
const helmet=require('helmet');
const router=require('./router')
const product=require('./productRouter')

const app=express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());

const port=7000;



app.use('/',router);
app.use('/product',product);



app.listen(port,()=>{
    console.log(`server is running port number ${port}`);

})
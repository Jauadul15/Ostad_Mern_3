const express=require('express');
const path = require("path");
const app=express();
const port=7000;

app.use(express.static('public'));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname+"/index.html"))
})
app.post('/post',(req, res)=>{
    res.send("<h1>hello 1 post</h1>")
})
app.put('/put',(req, res)=>{
    res.send("<h1>hello 1 put</h1>")
})
app.patch('/patch',(req, res)=>{
    res.send("<h1>hello 1 patch</h1>")
})
app.delete('/delete',(req, res)=>{
    res.send("<h1>hello 1 delete</h1>")
})
app.listen(port,()=>{
    console.log(`this port is running on port ${port}`)
})
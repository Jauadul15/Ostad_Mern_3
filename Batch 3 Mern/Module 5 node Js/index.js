// //base name
// const path=require('path')
// const os=require('os')
// const fs=require('fs')
// let filename='C:/Users/Rashik/Desktop/Ostad batch 3/Batch 3 Mern/Module 5 node Js/index.js';
// console.log(path.basename(filename));
// console.log(os.cpus());
// fs.writeFileSync('note.txt','hello ')
// fs.appendFileSync('note.txt','hi')
// const read=fs.readFileSync('note.txt')
// console.log(read.toString())
// //async
// fs.readFile('note.txt',(err,data)=>{
// console.log(data.toString())
// })
// console.log('haha')


const http=require('http');
const server=http.createServer((req, res)=>{
    res.end("hello")
})
server.listen(5059);
console.log("running")
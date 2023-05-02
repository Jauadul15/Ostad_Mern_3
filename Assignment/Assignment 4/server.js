const http = require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{
    if(req.url==='/' || req.url==='/home'){
        fs.readFile('./public/home.html',function (err, data){
            if(err){
                res.writeHead(404,{'content-Type':'text/html'})
                res.write('File not found')
                res.end()
            }else {
                res.writeHead(200,{'content-Type':'text/html'})
                res.write(data);
                res.end('');
            }
        })
    }else if(req.url==='/' || req.url==='/about'){
        fs.readFile('./public/about.html',function (err, data){
            if(err){
                res.writeHead(404,{'content-Type':'text/html'})
                res.write('File not found')
                res.end('')
            }else {
                res.writeHead(200,{'content-Type':'text/html'})
                res.write(data);
                res.end('');
            }
        })

    }else if(req.url==='/' || req.url==='/contact'){
        fs.readFile('./public/contact.html',function (err, data){
            if(err){
                res.writeHead(404,{'content-Type':'text/html'})
                res.write('File not found')
                res.end('')
            }else {
                res.writeHead(200,{'content-Type':'text/html'})
                res.write(data);
                res.end('');
            }
        })

    }else{
        const data=fs.readFileSync('./public/error.html');
        res.writeHead(404,{'content-Type':'text/html'});
        res.write(data);
        res.end();
    }
})
server.listen(3000);
console.log("server running port 3000")
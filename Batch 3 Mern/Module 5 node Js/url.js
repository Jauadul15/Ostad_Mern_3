const http=require('http')
const url=require('url')
const server=http.createServer((req,res)=>{
    const MyUrl='https://rabbil.com/blog.html?year=2020&month=july';
    let MyUrlObj=url.parse(MyUrl,true)

    let host=MyUrlObj.host;
    let path=MyUrlObj.path;
    let search=MyUrlObj.search;


    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(host);
    //res.write(path);
    //res.write(search);
    res.end()
})
server.listen(5055)
console.log('this is url bhanga')

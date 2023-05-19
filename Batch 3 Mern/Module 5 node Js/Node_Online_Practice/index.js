/*Node js practice

NodeJs
NodeJS is one of the most popular server-side programming frameworks running on the JavaScript V8 engine, which uses a single-threaded non-blocking I/O model. We can access the file system in NodeJS using some inbuilt modules.

file system
A file is a collection of related information stored in secondary storage Or a file is a collection of similar types of entities that work with the file and manage it also called a File System.
How to Access the File System in Node.js ?

File System Module (fs module): One of the popular inbuilt modules for working with the file system in NodeJS is the file system module which is also called the “fs” module in short. fs module is very powerful for doing any task in NodeJS related to File systems.

Access the File System in Node JS means performing some basic operations on files. This is also known as CRUD operations.

CRUD Operations:

C => Create the files
R => Read the files
U => Update the files
D => Delete the file
*/

//Operation 1: Create a File
//const http=require('http')
// const fs=require('fs')
// fs.writeFileSync('./hi.txt','this is practice')

//Operation 2: Read File
/*const http=require('http')
const fs=require('fs');
const server=http.createServer(function (req, res) {
    const readData=fs.readFileSync('./hi.txt',"utf-8").toString();
    res.end(readData);
})
server.listen(5050,()=>{
    console.log('server listen successful')
})
*/

//Operation 3: Update the File



/*const http=require('http');
const fs=require('fs');
const server=http.createServer(function (req, res) {
    fs.appendFileSync('./hi.txt',"this is change data")
    const updateData=fs.readFileSync('./hi.txt','utf-8').toString();
    res.end(updateData);
})
server.listen(5055,()=> {
    console.log("server running successful")
})
*/
//Operation 4: Delete a File

const http=require('http');
const fs=require('fs');
const server=http.createServer(function (req, res) {
    fs.unlinkSync('./hi.txt')
})
server.listen(5055,()=> {
    console.log("server running successful")
})
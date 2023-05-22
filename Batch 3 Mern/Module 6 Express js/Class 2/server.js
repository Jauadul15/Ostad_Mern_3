const express=require('express');
const helmet=require('helmet');
const app=express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());

// function validateUser(req,res,next) {
//     res.locals.validated=true;
//     console.log("1",'validate run');
//     next()
// }
// //app.use('/',validateUser);
//
// app.get('/',(req, res, next)=>{
//     res.send("<h1>this is home page</h1>");
//     console.log(res.locals.validated);
// })
//
// app.use('/admin',validateUser);
//
// app.post('/admin',(req, res, next)=>{
//     res.send("<h1>this is admin page</h1>");
//     console.log(res.locals.validated)
// })


app.get('/',(req, res)=>{
    // res.cookie("ami","shera");
    //res.send("<h1>Country  Page</h1>")
    res.redirect("/h")
})
app.get('/h',(req, res)=>{
    res.json({
        "title":"welcome"
    })
})




// function validateUser(req, res, next) {
//     res.locals.validated = true;
//     console.log("1","Validate Ran");
//     next();
// }


// app.use("/", validateUser);

// function validateUser(req, res, next) {
//     res.locals.validated = true;
//     console.log("Validated Ran");
//     next();
// }

// app.use("/admin",validateUser);


// app.get("/", (req, res, next) => {
//     res.send("<h1>Main Page</h1>")
//     console.log("2", res.locals.validated);
// })

// app.get("/admin", (req, res, next) => {
//     res.send("<h1>Admin Page</h1>")
//     console.log(res.locals.validated)
// })


// Example 3

// app.get("/", (req, res) => {
//     // res.cookie("country", "bangladesh");
//     // res.send("<h1>Country  Page</h1>")
//     res.redirect("/welcome");
// });
//
// app.get("/welcome", (req, res) => {
//     res.json({
//         "city": "Sylhet",
//         "class":5
//     })
// })




app.listen(8000, () => {
    console.log("The server is running successfully ");
})
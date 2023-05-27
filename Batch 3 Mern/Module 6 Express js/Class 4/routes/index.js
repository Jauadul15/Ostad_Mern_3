const express=require('express');
let router=express.Router();

const {test, most_popular} = require("../controller");
//console.log(movies);

router.get('/',test)

router.get('/most_popular',most_popular)




module.exports=router;


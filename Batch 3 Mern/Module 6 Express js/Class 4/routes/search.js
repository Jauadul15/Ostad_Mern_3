const express=require('express');
let router=express.Router();

const {queryRequired}=require('../middleware/search')
const {search_movie, search_person} = require("../controller/search");

router.use(queryRequired);

router.get('/movie',queryRequired,search_movie)
router.get('/person',queryRequired,search_person);



module.exports=router;

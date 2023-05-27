const express=require('express');
let router=express.Router();
const {requiredJson}=require('../middleware/movie')
const {top_rated, movieId, movieIDPost, movieIdRating} = require("../controller/movie");

router.use(requiredJson);


router.get('/top_rated',top_rated)
router.get("/:movieId",movieId)
router.post('/:movieId',requiredJson,movieIDPost)
router.delete('/:movieId/rating',requiredJson,movieIdRating)


module.exports=router;

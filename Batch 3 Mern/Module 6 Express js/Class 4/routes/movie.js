const express=require('express');
let router=express.Router();
const movieDetails=require('../data/movieDetails')

const requiredJson=(req,res,next)=>{
    if(!req.is("application/json")){
        res.json({
            msg:"Content type must be application/json"
        })
    }else{
        next();
    }
}
router.get('/top_rated',requiredJson,(req, res, next)=>{
    let page=req.query.page;
    if(!page){
        page=1;
    }
    let results=movieDetails.sort((a,b)=>{
        return b.vote_average - a.vote_average;
    })
    const indexStart=(page -1)*20
    res.json(results.slice(indexStart,indexStart+19))
})

router.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId;
    const results = movieDetails.find(movie => {
        return movie.id == Number(movieId);
    });
    if (!results) {
        res.json({
            msg: "Movie Id is not found"
        });

    } else {

        res.json(results);
    }

})

router.post('/:movieId',requiredJson,(req, res, next)=>{
    const movieId = req.params.movieId;
    console.log(movieId);
    const userRating = req.body.value;
    if (userRating < 0.5 || userRating > 10) {
        res.json({
            msg: "Rating must be between 0.5 and 10"
        })
    } else {
        res.json({
            msg: "Thank you for submitting your rating",
            status: 200
        })
    }

})

router.delete('//:movieId/rating',(req, res, next)=>{
    const movieId = req.params.movieId;
    res.json({
        msg: "Rating Deleted"
    })

})



module.exports=router;

const movieDetails = require("../data/movieDetails");
exports.top_rated=(req, res, next)=>{
    let page=req.query.page;
    if(!page){
        page=1;
    }
    let results=movieDetails.sort((a,b)=>{
        return b.vote_average - a.vote_average;
    })
    const indexStart=(page -1)*20
    res.json(results.slice(indexStart,indexStart+19))
}
exports.movieId=(req, res, next) => {
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

}
exports.movieIDPost=(req, res, next)=>{
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

}
exports.movieIdRating=(req, res, next)=>{
    const movieId = req.params.movieId;
    res.json({
        msg: "Rating Deleted"
    })

}

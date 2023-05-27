const movies = require("../data/movies");


exports.most_popular=(req, res, next)=>{
    let page=req.query.page;
    if(page==undefined){
        page=1;
    }
    let results=movies.filter(movies =>{
        return movies.most_popular==true;
    })
    const indexToStart=(page - 1) * 20;
    results.slice(indexToStart, indexToStart + 19);

    res.json({
        page,
        results
    })
}



exports.test=(req, res, next)=>{
    res.json({
        msg:"server theke index.js router e hit korlo and er por oi router er home path e hit kore aita show korlo"
    })
}
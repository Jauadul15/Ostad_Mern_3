const express=require('express');
let router=express.Router();

const movies=require('../data/movies')
const people=require('../data/people')
const queryRequired=(req, res, next) => {
    const searchTerm = req.query.query;
    if (!searchTerm) {
        res.json({
            msg: "Query is required"
        })
    } else {
        next();
    }
}

router.get('/movie',queryRequired,search_movie = (req, res, next) => {
    const searchTerm = req.query.query;
    const results = movies.filter(movie => {
        let found = movie.overview.includes(searchTerm) || movie.title.includes(searchTerm);

        return found;
    })

    res.json({ results });
})

router.get('person',queryRequired,search_person = (req, res, next) => {

    const searchTerm = req.query.query;
    const results = people.filter(person => {
        let found = person.name.includes(searchTerm);

        return found;
    })

    res.json({ results });
})




module.exports=router;

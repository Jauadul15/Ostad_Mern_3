exports.apiKey=(req, res, next)=>{
    if(req.query.api_key != '123456') {
        res.status(401);
        res.json({
            msg: "invalid API Key",
        })
    }
    else{
        next()
    }
}

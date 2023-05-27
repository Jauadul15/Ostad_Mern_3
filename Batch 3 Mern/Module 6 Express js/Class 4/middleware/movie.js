exports.requiredJson=(req,res,next)=>{
    if(!req.is("application/json")){
        res.json({
            msg:"Content type must be application/json"
        })
    }else{
        next();
    }
}
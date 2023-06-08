const jwt=require("jsonwebtoken");
const Profile=require("../models/profileModel");

exports.requireSignIn=async (req,res,next)=>{
    try {
        const decoded=jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
            req.user=decoded;
        next();
    }catch (e) {
        return res.status(401).json(e);
    }
};

exports.isAdmin=async (req,res,next)=>{
    try {
        const user=await Profile.findById(req.user._id)
        if(user.role !== 1){
        return res.status(401).send("Unauthorized")
        }else{
            next()
        }
    }catch (error) {
        console.log(error);
        return res.json(error);
    }
}

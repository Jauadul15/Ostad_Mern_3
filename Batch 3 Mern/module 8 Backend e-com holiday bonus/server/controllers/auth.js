const User=require("../models/user")
const {hashPassword,comparePassword}=require("../helpers/auth")
const jwt=require("jsonwebtoken");

exports.register=async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name.trim()){
            return res.json({error:"Name is required"})
        }
        if(!email){
            return res.json({error:"Email is required"})
        }
        if(!password || password.length<6){
            return res.json({error:"Password must be 6 character above"})
        }
        const existingUser=await User.findOne({ email });
        if(existingUser){
            return res.json({error:"Email is taken"})
        }
        const hashedPassword=await hashPassword(password);
        const user = await new User({
            name,
            email,
            password:hashedPassword,
        }).save();
        const token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7d"
        })
        res.json({
            user:{
                name:user.name,
                email:user.email,
                role:user.role,
                address:user.address
            },
            token,
        })
    }catch (err){

    }
}
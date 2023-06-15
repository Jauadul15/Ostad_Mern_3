const User=require("../models/user");
const {comparePassword,hashPassword}=require("../helpers/auth");
const jwt=require("jsonwebtoken");
require("dotenv").config();


exports.createProfile=async (req,res)=>{
    try {
        const {
            FirstName,
            LastName,
            Email,
            UserName,
            Password,
            PasswordConfirm,
            MobileNumber,
            Role,
        }=req.body;
        //custom validation check for each Field
        if(!FirstName || !LastName){
            return res.status(400).json({
                status:"Fail",
                message:"FirstName and LastName required"
            });
        }
        if(!Email){
            return res.status(400).json({
                status:"Fail",
                message:"Email Address is Required"
            });
        }
        if(!UserName){
            return res.status(400).json({
                status:"Fail",
                message:"UserName is required"
            });
        }
        if(!Password){
            return res.status(400).json({
                status:"Fail",
                message:"Password is Required"
            });
        }
        // Regular expression for Bangladeshi mobile number format (e.g., +8801712345678 or 01712345678)
        const mobileNumberRegex= /^(?:\+?88)?01[3-9]\d{8}$/;
            ///^(?:\+88|01)?(?:\d{11}|\d{13})$/;
        if(!mobileNumberRegex.test(MobileNumber)){
            return res.status(400).json({
                status:"Fail",
                message:"Please Provide a Valid Number"
            });
        }
        if(Password !==PasswordConfirm){
            return res.status(400).json({
                status:"Fail",
                message:"Password Not Matching"
            });
        }
        //check if email is taken
        const existingUser=await User.findOne({Email,UserName,MobileNumber });
        if(existingUser){
            return res.status(400).json({
                status:"Fail",
                message:"Please Enter valid User Information.A User Exists by this Information"
            });
        }
        //Password Hashing Applying in database it will store hashed which user enter a plain password it will turn into hahsed and saved the hashed password in database
        const hashedPassword=await hashPassword(Password)

        //Register User
        const user=await User.create({
            FirstName,
            LastName,
            Email,
            UserName,
            Password:hashedPassword,
            MobileNumber,
            Role
        });
        const token=jwt.sign({_id:User._id},process.env.JWT_SECRETKEY,{
            expiresIn: "7d"
        });
        res.status(201).json({
            status:"User Created Successfully",
            data:user,
            token,
        });
    }catch (error) {
        console.error(error);
        res.status(500).json({
            status:"Something Went Wrong",
            message:"User Not Created For some Internal Issue"
        })
    };
}
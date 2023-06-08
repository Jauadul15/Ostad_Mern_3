const Profile = require("../models/profileModel");
const {comparePassword,hashPassword}=require("../helper/auth")
const jwt=require("jsonwebtoken");
require("dotenv").config();

exports.CreateProfile = async (req, res) => {
    try {
        const {
            FirstName,
            LastName,
            email,
            username,
            password,
            passwordConfirm,
            mobileNumber,
            location,
            role,
        } = req.body;

        // Custom validation checks for each field
        if (!FirstName || !LastName) {
            return res.status(400).json({
                status: "fail",
                message: "First Name and Last Name are required fields.",
            });
        }

        if (!email) {
            return res.status(400).json({
                status: "fail",
                message: "Email Address is required.",
            });
        }

        if (!username) {
            return res.status(400).json({
                status: "fail",
                message: "Username is required.",
            });
        }

        if (!password) {
            return res.status(400).json({
                status: "fail",
                message: "Password is required.",
            });
        }

        if (!location) {
            return res.status(400).json({
                status: "fail",
                message: "Location is required.",
            });
        }
        // Regular expression for Bangladeshi mobile number format (e.g., +8801712345678 or 01712345678)
        const mobileNumberRegex = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;

        // Validate mobile number
        if (!mobileNumberRegex.test(mobileNumber)) {
            return res.status(400).json({
                status: "fail",
                message: "Please provide a valid Bangladeshi mobile number.",
            });
        }


        // Password confirmation check
        if (password !== passwordConfirm) {
            return res.status(400).json({
                status: "fail",
                message: "Password confirmation does not match the password.",
            });
        }
// 3. check if email is taken
        const existingUser = await Profile.findOne({ email });
        if (existingUser) {
            return res.json({ error: "Email is taken" });
        }
        // 4. hash password
        const hashedPassword = await hashPassword(password);
        //register user
        const profile = await Profile.create({
            FirstName,
            LastName,
            email,
            username,
            password:hashedPassword,
            mobileNumber,
            location,
            role
        });
        // 6. create signed jwt
        const token = jwt.sign({ _id: Profile._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(201).json({
            status: "Success",
            data: profile,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while creating the profile.",
        });
    }
};

exports.userLogin = async (req, res) => {
    try {
        // 1. destructure username, email, password from req.body
        const { mobileNumber, email, password } = req.body;

        // 2. all fields require validation
        if (!mobileNumber) {
            return res.json({ error: "Mobile Number is required" });
        }

        if (!email) {
            return res.json({ error: "Email is required" });
        }

        if (!password) {
            return res.json({ error: "Please provide your correct password to login" });
        }

        // 3. check if user exists by email or username
        const user = await Profile.findOne({ $or: [{ email }, { mobileNumber }] })

        if (!user) {
            return res.json({ error: "User not found" });
        }

        // 4. compare password
        const match = await comparePassword(password, user.password);

        if (!match) {
            return res.json({ error: "Invalid email or password" });
        }

        // 5. create signed jwt
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        // 6. send response
        res.json({
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while logging in.",
        });
    }
};


exports.ProfileUpdate=async (req,res)=>{
    try {
    const {FirstName,LastName,mobileNumber,location,password}=req.body;
    const user=await Profile.findById(req.user._id);
    if(!password){
        return res.json({
            error:"Password Required"
        })
    }
    const hashedPassword=password ? await hashPassword(password):undefined;
    const updated=await Profile.findByIdAndUpdate(
        req.user._id,
        {
            FirstName:FirstName|| user.FirstName,
            LastName:LastName || user.LastName,
            mobileNumber:mobileNumber || user.mobilenumber,
            location:location || user.location,
            password:hashedPassword || user.password
        },
        {
         new:true
        }
    );
    updated.password=undefined;
    res.json(updated);
    }catch (e) {
    console.log(e)
    }
}
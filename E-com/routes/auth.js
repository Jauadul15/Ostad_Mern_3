const express=require("express");
const {createProfile,LogIn}=require("../controllers/userController")
const {requireSignIn,isAdmin}=require("../middlewares/auth")
const router=express.Router();


router.post("/register",createProfile)
router.post("/login",LogIn)






module.exports=router;

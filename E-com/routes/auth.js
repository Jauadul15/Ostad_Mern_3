const express=require("express");
const {createProfile}=require("../controllers/userController")
const {requireSignIn,isAdmin}=require("../middlewares/auth")
const router=express.Router();


router.post("/register",createProfile)





module.exports=router;
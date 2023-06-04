const express=require("express");
const profileController=require("../controllers/profileController");
const router=express.Router();



router.post("/CreateProfile",profileController.CreateProfile)


module.exports=router;

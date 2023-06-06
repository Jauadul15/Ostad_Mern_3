const express=require("express");
const profileController=require("../controllers/profileController");
const router=express.Router();



router.post("/CreateProfile",profileController.CreateProfile)
router.post("/userLogin",profileController.userLogin)

module.exports=router;

const express=require('express');
const router=express.Router();

router.get("/",(req, res)=>{
    res.json({
        msg:"This is home router"
    })
})
router.get("/test",(req, res)=>{
    res.json({
        msg:"This is New test router"
    })
})


module.exports=router;
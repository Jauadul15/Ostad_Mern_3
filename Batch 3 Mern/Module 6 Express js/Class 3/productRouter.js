const express=require('express');
const router=express.Router();

router.get("/",(req, res)=>{
    res.json({
        msg:"This is New test router"
    })
})
router.get("/testProduct",(req, res)=>{
    res.json({
        msg:"This is New test product router"
    })
})

module.exports=router;
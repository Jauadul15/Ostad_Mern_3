const express=require("express");
const {bookCreation,SearchAllBooks,singleBookFind,singleBookUpdate,singleBookDelete}=require("../controllers/book")
const router=express.Router();

router.post("/bookCreation",bookCreation);
router.get("/SearchAllBooks",SearchAllBooks);
router.get("/singleBookFind/:id",singleBookFind);
router.put("/singleBookUpdate/:id",singleBookUpdate);
router.delete("/singleBookDelete/:id",singleBookDelete);





module.exports=router;

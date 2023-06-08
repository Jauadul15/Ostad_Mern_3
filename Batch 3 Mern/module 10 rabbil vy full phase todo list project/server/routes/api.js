const express=require("express");
const profileController=require("../controllers/profileController");
const productController=require("../controllers/productController")
const {requireSignIn,isAdmin}=require("../middlewares/AuthVerify")
const router=express.Router();



router.post("/CreateProfile",profileController.CreateProfile)
router.post("/userLogin",profileController.userLogin)
router.get("/auth-check",requireSignIn,(req, res)=>{
    res.json({ ok: true });
})
router.put("/profileUpdate",requireSignIn,profileController.ProfileUpdate)
router.post("/product",requireSignIn,isAdmin,productController.createProduct)
router.get("/allproduct",productController.GetAllProduct)

router.get("/productsearchbyid/:id",productController.getProductById);
router.put("/updateproduct/:id",requireSignIn,isAdmin,productController.UpdateProductById);
router.delete("/deleteProductById/:id",requireSignIn,isAdmin,productController.deleteProductById);


module.exports=router;

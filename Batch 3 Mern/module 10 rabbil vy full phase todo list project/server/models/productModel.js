const mongoose=require("mongoose");
const {Schema}=mongoose;

const productSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
},{
    timestamps:true,versionKey:false
})

const productModel=mongoose.model("products",productSchema);
module.exports=productModel;
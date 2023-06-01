const mongoose=require("mongoose");
const {Schema}=mongoose;

const UserSchema=new Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    author:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true
    }

},{
    timestamps:true,
    versionKey:false
})


const books=mongoose.model("Book Collection",UserSchema);
module.exports=books;
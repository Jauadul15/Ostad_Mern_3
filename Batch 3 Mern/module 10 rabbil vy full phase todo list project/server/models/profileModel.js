const mongoose=require("mongoose");
const {Schema}=mongoose;

const DataSchema=new Schema({
    FirstName:{
        type:String,
        required:[true,"First Name is Required."],
        trim:true,
        minlength:[2, "First name should have at least 2 characters."],
        maxlength:[50, "First name should not exceed 50 characters."],
    },
    LastName:{
        type:String,
        require:[true,"Last Name is Required"],
        minlength:[2, "First name should have at least 2 characters."],
        maxlength:[50, "First name should not exceed 50 characters."],
    },
    email:{
        type:String,
        require:[true,"Email Address is Required"],
        unique:true,
        trim:true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Please provide a valid email address.",
        ],
    },
    username: {
        type: String,
        required: [true, "Username is required."],
        unique: true,
        trim: true,
        minlength: [4, "Username should have at least 4 characters."],
        maxlength: [20, "Username should not exceed 20 characters."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password should be at least 8 characters long."],
    },
    passwordConfirm: {
        type: String,
    },
    mobileNumber: {
        type: String,
        trim: true,
        unique:true,
    },
   location: {
        type: String,
        enum: [
            "Dhaka",
            "Chittagong",
            "Sylhet",
            "Khulna",
            "Rajshahi",
            "Barisal",
            "Rangpur",
            "Mymensingh",
        ],
        required: [true, "Location is required."],
    },
    role: {
        type: Number,
        default: 0,
    },


},{timestamps:true,
    versionKey:false
});

const ProfileModel=mongoose.model("Profile",DataSchema);
module.exports=ProfileModel;
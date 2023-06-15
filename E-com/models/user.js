const mongoose=require("mongoose");
const {Schema}=mongoose;


const userSchema=new Schema({
    FirstName:{
        type:String,
        required:[true,"First Name is Required"],
        trim:true,
        minLength:[2,"First name should be at least 2 characters"],
        maxLength:[50,"First name should not be exceed 50 characters"],
    },
    LastName:{
        type:String,
        required:[true,"Last Name is Required"],
        trim:true,
        minLength:[2,"LastName should be at least 2 characters"],
        maxLength: [50,"LastName should not be exceed 50 characters"],
    },
    Email:{
        type:String,
        required:[true,"Email Required"],
        unique:true,
        trim:true,
        match:[
            /^\S+@\S+\.\S+$/,
            "Please provide a valid email address.",
        ],
    },
    UserName:{
        type:String,
        required:[true,"UserName is required"],
        unique: true,
        trim:true,
        minLength:[4,"UserName should have at least 4 characters."],
        maxLength:[20,"Username should not exceed 20 characters."],
    },
    Password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[8,"Password should have at least 8 characters."],

    },
    PasswordConfirm: {
        type: String,
        validate: {
            validator: function (value) {
                return value === this.Password;
            },
            message: "Passwords do not match",
        },
    },
    MobileNumber:{
        type:String,
        trim:true,
        unique:true,
    },
    Role: {
        type: String,
        enum: ["admin", "general user", "manager", "supervisor", "employee", "guest"],
        default: "general user",
    }

},{
    timestamps:true,
    versionKey:false,
    autoIndex:true
});

const UserModel=mongoose.model("User",userSchema);
module.exports=UserModel;
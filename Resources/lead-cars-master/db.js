const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://leadadmin:MArtmsb2020@cluster0.vjj3v.mongodb.net/leadcars?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
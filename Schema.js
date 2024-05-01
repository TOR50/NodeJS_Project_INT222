const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    email:{
        type:String
    },
    Address:{
        type:String
    },
    city:{
        type:String
    },
    pincode:{
        type:Number
    },
    password:{
        type:String
    },
})

module.exports = userDetailSchema;
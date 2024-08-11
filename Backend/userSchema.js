const mongoose = require("mongoose")

const DataSchema = new mongoose.Schema(
    {
       name:{type:String,required : true},
       mobileno:{type:Number,required: true},
       email:{type:String , required:true},
       password:{type:String , required:true},

    }
)

const User = mongoose.model('UserSchema', DataSchema);

module.exports = User;
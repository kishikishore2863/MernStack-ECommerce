const mongoose = require('mongoose');
const z = require('zod')
const dotenv =require('dotenv');

dotenv.config({path:'./config.env'})


const DB = process.env.DATABASE

mongoose.connect(DB)


// Replace your MongoDB connection code with the following:

// mongoose.connect("mongodb+srv://kishikishore:E81I0sTfCF5bHvXw@cluster0.gtawy1t.mongodb.net/ecommerce")

 

const userSchema=new mongoose.Schema({
    email:{type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:Number,
        required:true,
        maxlength:10,
        minlength:10,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        confirmed:{
            type:Boolean,
            defaultValue:false
        }
    },
    courses:[{type:mongoose.Schema.Types.ObjectId,ref:'courses'}]
})



const adminSchema = new mongoose.Schema({
    email:{type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
})

const coursesSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imagelink:String,
    published:Boolean
})

const User =mongoose.model('User',userSchema,);
const Admin =mongoose.model('Admin',adminSchema);
const Courses =mongoose.model('Courses',coursesSchema);


module.exports={
    User,Admin,Courses
}
const mongoose = require('mongoose');
const dotenv =require('dotenv');

dotenv.config({path:'./config.env'})


const DB = process.env.DATABASE

mongoose.connect(DB)


// Replace your MongoDB connection code with the following:

// mongoose.connect("mongodb+srv://kishikishore:E81I0sTfCF5bHvXw@cluster0.gtawy1t.mongodb.net/ecommerce")

 

const userSchema=new mongoose.Schema({
    email:{type:String,
        required:true,
        unique:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        minLength:3,
        maxLength:30,
        trim:true
    },
    phoneNo:{
        type:Number,
        required:true,
        max:9999999999
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        trim:true
      
    }
   
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
    title:{
        type:String

    },
    instructor:{
       type:String,
       required:true
    },
    description:String,
    price:Number,
    imagelink:String,
    published:{
        type:Boolean,
        defaultValue:false
    }
})

const User =mongoose.model('User',userSchema,);
const Admin =mongoose.model('Admin',adminSchema);
const Courses =mongoose.model('Courses',coursesSchema);


module.exports={
    User,Admin,Courses
}
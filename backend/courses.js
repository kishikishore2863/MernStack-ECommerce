
const mongoose =require('mongoose');

mongoose.connect('mongodb+srv://kishikishore:E81I0sTfCF5bHvXw@cluster0.gtawy1t.mongodb.net/Ecommerce/courses',{ useNewUrlParser: true, useUnifiedTopology: true , dbName:"Ecommerece"})



const userSchema=new mongoose.Schema({
    email:String,
    password:String,
    courses:[{type:mongoose.Schema.Types.ObjectId,ref:'courses'}]
})

const adminSchema = new mongoose.Schema({
    email:String,
    password:String
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
    Courses
}
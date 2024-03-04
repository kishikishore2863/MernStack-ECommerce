const express =require('express');
const app = express();
const mongoose =require('mongoose');
const {Admin , User , Courses} = require('./mongodb')
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.post('/user/signin',(req,res)=>{
    const {email,password} = req.body;
   async  function  callback (user){
        if(user){
          res.status(403).json({message:'user Already exists'})
        }
        else
        {
          const obj = {email:email,password:password};
          const newUser = new User(obj);
          await newUser.save();
          res.status(200).json({message:'user created sucessfully'})

        }
    }


    User.findOne({email}).then(callback);
    
    
});

app.listen(3000,()=>{console.log("server is listening on port 3000")})







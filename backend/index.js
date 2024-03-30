const express =require('express');
const app = express();
const jwt = require('jsonwebtoken')
const {User,Admin,Courses } = require('./mongodb')
const cors = require('cors')
const mongoose = require('mongoose')


app.use(cors());
app.use(express.json());


const SECRET = 'Kishi3434';
const authenticateJwt = (req,res,next)=>{
  const authHeader = req.headers.authorization;
  if(authHeader){
    const token = authHeader.split(' ')[1];
    jwt.verify(token,SECRET,(err,user)=>{
      if (err){
        return res.status(403);
      }
      req.user = user;
      next();
    })
  
  }
  else{
    res.status(403)
  }
}

app.post('/admin/signup',(req,res)=>{
  const {email,password}=req.body;
  function callback(admin){
    if(admin){
      res.status(403).json({message:'Admin alredy exists'})
    }
    const obj = { email:email,password:password};
    const newAdmin = new Admin(obj);
    newAdmin.save();
    const token = jwt.sign({email},SECRET,{expiresIn:'1h'});
    res.json({message:'Admin created successfully',token});
    
  }
  Admin.findOne({email}).then(callback);
})


app.post('/admin/login',async (req,res)=>{
  const {email,password}=req.headers;
  const admin = await Admin.findOne({email,password});
  if(admin){
    const token =jwt.sign({email},SECRET,{expiresIn:'1h'});
    res.json({message:"Login successfully",token})
  }
  res.status.json({message:'invalid email or password'});
})


app.post('/user/signup',(req,res)=>{
const {email,name,phoneNo,password} = req.body;
function callback (user){
  if(user){
    res.status(403).json({message:'user is already existed'})
  }
  const obj = {email:email,name:name,phoneNo:phoneNo,password:password};
  const newUser = new User(obj)
  newUser.save();
  const token = jwt.sign({email},SECRET,{expiresIn:'1h'});
  res.status(200).json({message:'User created sucessfully',token})
}
User.findOne({email}).then(callback)

});


app.post('/user/login',async (req,res)=>{
  const {email,password} = req.headers;
  const user = await User.findOne({email,password});
  if(user){
    const token = jwt.sign({email},SECRET,{expiresIn:'1hr'})
    res.status(200).json({message:'login sucessfully',token})
  }
  res.status(403).json({message:'email or password invalid'})

})

app.get('/admins', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




app.listen(3000,()=>{console.log("server is listening on port 3000")})







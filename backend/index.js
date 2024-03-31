const express =require('express');
const app = express();
const jwt = require('jsonwebtoken')
const {User,Admin,Courses } = require('./mongodb')
const cors = require('cors')





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
try {
  const {email,password}=req.body;
  function callback(admin){
    if(admin){
      res.status(403).json({message:'Admin alredy exists'})
    }
    const obj = { email:email,password:password};
    const newAdmin = new Admin(obj);
    newAdmin.save();
    const token = jwt.sign({email,password},SECRET,);
    res.json({message:'Admin created successfully',token});
    
  }
  Admin.findOne({email}).then(callback); 
} 
catch (err) {
  res.status(400).json({
    status:'fail'
  })
}
});


app.post('/admin/login',async (req,res)=>{
  try{
  const {email,password}=req.headers;
  const admin = await Admin.findOne({email,password});
  if(admin){
    const token =jwt.sign({email,password},SECRET,);
    res.json({message:"Login successfully",token})
  }
  res.status.json({message:'invalid email or password'});
}
catch(err){
  console.log(err);
  res.status(400).json({message:'internal server error'})
}
})


app.post('/user/signup', async (req,res)=>{
  try{
const {email,username,phoneNo,password} = req.body;
const user = await User.findOne({email})
  if(user){
    res.status(403).json({message:'user is already existed'})
  }
  else{
  const obj = {email:email,username:username,phoneNo:phoneNo,password:password};
  const newUser = new User(obj)
  await newUser.save();
  const token = jwt.sign({email,password},SECRET);
  res.status(200).json({message:'User created sucessfully',token})
}
  }
  catch (error){
    console.log(error)
    res.status(400).json({message:'internal server error'})
  }
});


app.post('/user/login',async (req,res)=>{
  try {
   const {email,password} = req.headers;
   const user = await User.findOne({email});
   if(user){
     const token = jwt.sign({email,password},SECRET)
     res.status(200).json({message:'login sucessfully',token})
     }
   res.status(403).json({message:'email or password invalid'})
 }
 catch (error) {
  console.log(error);
  res.status(400).json({message:'internal server error'})
}});



app.get('/admins', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/home',authenticateJwt, async(req,res)=>{
try{
  const data = await Courses.find();
  res.status(200).json(data)

}
catch (err){
  console.log(err)
  res.status(400).json({message:'internal server error'})

}
})

app.post('/course/dumping',authenticateJwt,async(req,res)=>{
  try{
  const {title,instructor,description,price,imagelink} = req.body;
  const obj= {
    title:title,
    instructor:instructor,
    description:description,
    price:price,
    imagelink:imagelink
  }
  
  const newCourses = new Courses(obj);
  await newCourses.save()
  res.status(200).json({message:'course posted sucessfully '})
  }
  catch(err){
    res.status(400).json({message:'internal server error'})
  }

})



app.listen(3000,()=>{console.log("server is listening on port 3000")})







import { useEffect,useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';





function Main(){


return(
<>

<div className="entire" >

{/* nav bar */}
   <div style={{display:'flex',background:'black',justifyContent:'space-around',width:'100%'}}>


    <div><h3 style={{color:'white'}}>NIKE</h3></div>
    <div style={{alignSelf:'center'}}>
    <nav style={{ }}>
     <Link style={{color:'white',}} to="/home">Home</Link>
     <Link style={{color:'white',marginLeft:'20px'}} to="/about" >About</Link>
     <Link style={{color:'white',marginLeft:'20px'}} to="/service">Services</Link>
     <Link style={{color:'white',marginLeft:'20px'}} to="/contact">Contact</Link>
    </nav>
    </div>
  
    
   </div>

   {/* body */}
   <div>
         <div style={{display:'flex',justifyContent:'space-around',width:'100%'}}>
             <div style={{width:'50%',height:'400px'}}>
               <img src="/images/air.png" alt="" style={{ width: '100%', height: '100%',objectFit:'contain' }} />
             </div>

             <div style={{width:'50%',height:'400px',padding:'40px',marginRight:'100px'}}>
              <h1>Nike air jordan</h1>
              <p>Nike released the Air Jordan sneaker line in April 1985 with the goal of making $3 million in the first three years. Sales greatly exceeded expectations, earning $126 million in one year. The NBA policy stated that the shoes must be 51% white and in accordance with the shoes that the rest of the team was wearing.</p>
              <h3> Price strating from $99</h3>
              

             </div>
         </div>

         <div style={{display:'flex',justifyContent:'space-around'}}>
             <div style={{width:'50%',height:'400px',marginTop:'100px'}}>
             
              <h1> Michael Jordan</h1>
                <p>As Michael Jordan entered his rookie year in 1984, he was approached to sign a shoe deal with Adidas, Converse, and Nike. In their meeting with Jordan, Nike centered its presentation around a highlight video of Jordan's various slam dunks, scored to "Jump (For My Love)" by the Pointer Sisters.</p>
             </div>
             <div style={{width:'50%',height:'400px'}}>
             <img src="/images/jordan.png" alt=""  style={{height:'100%',width:'100%',objectFit:'contain'}}/>
              
             </div>
         </div>

   </div>

   <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '10px' }}>
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>




      </div>
  </>


  )
}

export default Main;
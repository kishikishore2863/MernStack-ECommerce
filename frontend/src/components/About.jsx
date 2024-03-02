import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div style={{display:'flex',background:'black',justifyContent:'space-around',width:'100%'}}>
    <div><h3 style={{color:'white'}}>NIKE</h3></div>
    <div style={{alignSelf:'center'}}>
    <nav style={{ }}>
     <Link style={{color:'white',}} to="/">Main</Link>
     
    </nav>
    </div>
  
    
   </div>
    

    </>
  );
}

export default Home;
import { useEffect,useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Main from "./components/Main";
import Home from "./components/Home";
import About from "./components/About";





function App(){


return(
<>

<Router>
  <Routes>
     <Route path="/home"element={<Home/>} ></Route>
     <Route path="/"element={<Main/>} ></Route>
     <Route path="/about"element={<About/>} ></Route>
  </Routes>
</Router>

</>


  )
}

export default App;
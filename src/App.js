import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from "react";

function App(){
  const [user,setuser]=useState([{
        username:"Nana",
        password:"123"
    }])
  return(<div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login user={user} setuser={setuser}></Login>}></Route>
        <Route path='/Signup' element={<Signup user={user} setuser={setuser}></Signup>}></Route>
        <Route path='/landing' element={<Landing></Landing>}></Route>
      </Routes>
    </BrowserRouter>
  </div>)
}

export default App;

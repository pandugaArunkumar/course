import React from "react";
import Home from "./firstproject/home";
import About from "./firstproject/about";
import Contact from "./firstproject/contact";
import Success from "./firstproject/success";
import Feature from "./firstproject/feature";
import New from "./firstproject/new"
import Project from "./firstproject/project";
import { Route,Routes } from "react-router-dom";
import Navbar from "./firstproject/navbar";
import Notfound from "./firstproject/notfound";
import Users from "./firstproject/users";
import UserDetails from "./firstproject/userdetails";
import {AuthProvider} from "./firstproject/auth"
import Login from "./firstproject/login";
import Logout from "./firstproject/logout";





function App() {
  return (
    <div className="App">
       
    <div>
      <AuthProvider className="App">
      <Navbar></Navbar>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
      <Route path="/project" element={<Project/>}>
      <Route index element={<New/>}></Route>
      <Route path="feature" element={<Feature/>}></Route>
      <Route path="new" element={<New/>}></Route>
      </Route>
      <Route path='/users' element={<Users/>}></Route>
      <Route path="/users/:userId" element={<UserDetails/>}></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      
      

    </Routes>
    </AuthProvider>
    </div>
   
    </div>
  );
}

export default App;

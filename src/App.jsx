import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

import WebDev from "./components/Courses/WebDev";
import Login from "./components/Login";
import Register from "./components/Register";

import Forget from "./components/Forget";
import ChangePassword from "./components/ChangePassword";
import AdminLogin from "./components/Admin/AdminLogin";


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Footer />
      <WebDev />
      <Login/>
      <Register/> 
      <Forget/> 
      <ChangePassword />
      <AdminLogin />
      
      
      
    </main>
  );
};

export default App;

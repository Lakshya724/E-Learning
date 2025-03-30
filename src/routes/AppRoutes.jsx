// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import AllCourses from "../components/Courses/AllCourses";
import WebDev from "../components/Courses/WebDev";
import Mobile from "../components/Courses/Mobile";
import AIML from "../components/Courses/AIML";
import Data from "../components/Courses/Data";
import Login from "../components/Login";
import Register from "../components/Register";
import Forget from "../components/Forget";
import ChangePassword from "../components/ChangePassword";
import AdminLogin from "../components/Admin/AdminLogin";

import Sidebar_D from "../components/Admin/Sidebar_D";
import Dashboard from "../components/Admin/Dashboard";
import CourseList from "../components/Admin/CourseList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/WebDev" element={<WebDev />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/ai-ml" element={<AIML />} />
      <Route path="/data" element={<Data />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/sidebar" element={<Sidebar_D/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/course-list" element={<CourseList />} />

    </Routes>
  );
};

export default AppRoutes;

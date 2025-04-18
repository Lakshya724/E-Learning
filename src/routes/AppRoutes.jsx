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
import AddCourse from "../components/Admin/AddCourse";
import UserManagement from "../components/Admin/UserManagement";
import Courseselect from "../components/Courses/Courseselect";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Profile from "../components/profile";
import CourseDetails from "../components/Courses/CourseDetails";
import MobileDevelopmentCourse from "../components/Courses/MobiledevelopmentCourse";
import AIMLCourse from "../components/Courses/AIMLCourse";
import DataScienceCourse from "../components/Courses/DataScienceCourse";
// import CourseDetail from "../components/Courses/CourseDetail";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/webdev" element={<WebDev />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/ai-ml" element={<AIML />} />
      <Route path="/data" element={<Data />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/sidebar" element={<Sidebar_D />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/course-list" element={<CourseList />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/Courseselect" element={<Courseselect />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/course-details" element={<CourseDetails />} />
      <Route path="/mobile-course-details" element={<MobileDevelopmentCourse />} />
      <Route path="/AIML-course" element={<AIMLCourse />} />
      <Route path="/DataScience-details" element={<DataScienceCourse />} />
      {/* <Route path="/course/:id" element={<CourseDetail />} /> */}

    </Routes>
  );
};

export default AppRoutes;

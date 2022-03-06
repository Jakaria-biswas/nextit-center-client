import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Contact from "./components/Contact/Contact";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import AddNewCourse from "./components/Dashboard/AddNewCourse";
import Dashboard from "./components/Dashboard/Dashboard";
import Message from "./components/Dashboard/Message/Message";
import ShowData from "./components/Dashboard/Message/ShowData";
import UpdateDelete from "./components/Dashboard/UpdateDelete/UpdateDelete";
import ViewAllCourse from "./components/Dashboard/ViewAllCourse";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainCourse from "./components/MainCourse/MainCourse";



function App() {
  return (
    <div>
   
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<Header/>}></Route>
          <Route path="/course" element={<> <Header/> <MainCourse/> <Footer/></>}></Route>
          <Route path="/contact" element={<><Header/> <Contact/> <Footer/></>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          {/* <Route path="/login" element={<Dashboard/>}></Route> */}
          <Route path="/courseId/:courseId" element={<CourseDetail/>}></Route>
          <Route path="/login" element={<Dashboard/>}></Route>
          <Route path="/viewAllCourse" element={<><Dashboard/> <ViewAllCourse/></>}></Route>
          <Route path="/addNewCourse" element={<><Dashboard/> <AddNewCourse/></>}></Route>
          <Route path="/updateDelete" element={<><Dashboard/> <UpdateDelete/></>}></Route>
          <Route path="/contactMessage" element={<><Dashboard/> <Message/></>}></Route>
          <Route path="/contactId/:contactId" element={<ShowData/>}></Route>
           <Route path="/dashboard" element={<Dashboard/>}></Route>

       </Routes>

    </div>
  );
}

export default App;

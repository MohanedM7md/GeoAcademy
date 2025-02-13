import { Routes, Route } from "react-router";
import NavBar from "./components/navBar"
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import SideNavBar from "./components/sideNavBar";
import Landing from "./pages/dashboard/landingPage";
import Exams from "./pages/dashboard/exams";
import Videos from "./pages/dashboard/videos";
import Quizs from "./pages/dashboard/quizs";
import GradeBook from "./pages/dashboard/gradeBook";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element ={<SideNavBar />}>
          <Route path="landing" element={<Landing />} />
          <Route path="exams" element={<Exams />} />
          <Route path="videos" element={<Videos />} />
          <Route path="quizs" element={<Quizs />} />
          <Route path="gradeBook" element={<GradeBook />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App

import { Routes, Route } from "react-router";
import NavBar from "./components/navBar"
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signUp";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

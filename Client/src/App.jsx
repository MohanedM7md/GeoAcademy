import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import navBar from "./components/navbar";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<navBar />} />
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App

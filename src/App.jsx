import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "/src/pages/beranda/Homepage.jsx";
import Login from "/src/pages/login/login.jsx";
import Register from "/src/pages/register/Register.jsx";

import '/src/globals.css'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
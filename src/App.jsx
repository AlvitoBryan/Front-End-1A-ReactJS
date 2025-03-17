import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/beranda/Homepage";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
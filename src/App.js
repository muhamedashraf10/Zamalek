import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1/Home1";
import Home2 from "./pages/Home2/Home2";
import Home3 from "./pages/Home3/Home3";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="home1" element={<Home1 />} />
        <Route path="home2" element={<Home2 />} />
        <Route path="home3" element={<Home3 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

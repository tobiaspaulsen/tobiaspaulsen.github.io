import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";

function App() {
  return (
    // Snap scroll?
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

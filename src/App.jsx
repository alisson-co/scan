import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Features from "./components/pages/Features";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

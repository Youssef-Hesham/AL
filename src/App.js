import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import Contact from "./ContactUs";
import Home from "./Home";
import Products from "./products";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import { Admin } from "./Admin";
import Contact from "./ContactUs";
import Home from "./Home";
import Partners from "./Partners";
import Products from "./products";
import News from "./News";
import Life from "./product-components/lifeScience";
import Enviromental from "./product-components/enviromental";
import Lab from "./product-components/lab";
import Material from "./product-components/matrial";
import Pcb from "./product-components/pcb";
import Restoration from "./product-components/restoration";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<Navigate to="." replace />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/lifeScience" element={<Life />} />
      <Route path="/enviromental" element={<Enviromental />} />
      <Route path="/lab" element={<Lab />} />
      <Route path="/Material" element={<Material />} />
      <Route path="/restoration" element={<Restoration />} />
      <Route path="/pcb" element={<Pcb />} />
    </Routes>
  );
}

export default App;

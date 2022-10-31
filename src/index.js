import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Grad from "./gradient";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Grad />
      <App />
      <Grad />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

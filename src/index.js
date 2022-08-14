import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "./res/svgs/svgStyle.css"

import Webnav from "./components/navbar/webnav";


import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import About from "./pages/About";


export default function App() {
  return (


    <div className="App">
      <div class="backdrop"></div>
      <div class="foreground">
        <Webnav />
        <Outlet />

      </div>


      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
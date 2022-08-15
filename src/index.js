import React from 'react';
import ReactDOM from "react-dom/client";
import pkg from 'semantic-ui-react/package.json'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Importing the Bootstrap CSS
import "./index.css";
import "./res/svgs/svgStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Webnav from "./components/navbar/webnav";

import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import About from "./pages/About";


export default function App() {
  return (
    <div className="App">
      <header>
        <Webnav />
      </header>
      <main>
        <section className='backdrop'>
          <section className='content'>
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Pokedex />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </BrowserRouter>
            <Outlet />
          </section>
        </section>
      </main>

      <footer>
        <Webnav />
      </footer>
    </div>
  );
}

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

//CSS
import "./index.css";
import "./res/svgs/svgStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';


// COMPONENTS
import Webnav from "./components/navbar/webnav";

// PAGES
import {Pokedex, Pokedex_Ns} from "./pages/Pokedex";
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
                <Route path="/" exact element={<Pokedex_Ns className="" name="ryu" xprops={{color: 'red'}} />} />
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

const CDN_CSS = [
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css",
];

CDN_CSS.forEach(href => {
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = href;
  document.head.appendChild(styleLink);
});


const CDN_JS = [
  
];

CDN_JS.forEach(href => {
  const scriptlink = document.createElement("link");
  scriptlink.rel = "javascript";
  scriptlink.src = href;
  document.head.appendChild(scriptlink);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
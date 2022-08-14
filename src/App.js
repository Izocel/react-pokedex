import React from "react";
import { Route, Routes } from "react-router-dom";
import Webnav from "./components/navbar/webnav";

import About from "./About";
import Shop from "./Shop";
import Home from "./Home";


export default function App() {
  return (
      <div className="App">
          <Webnav />
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
          </Routes>
      </div>
  );
}

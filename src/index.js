import React from "react";
import ReactDOM from "react-dom";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "./res/svgs/svgStyle.css"

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

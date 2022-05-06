import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Cursor from "./components/Cursor";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      {/* <Cursor/> */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

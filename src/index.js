import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Search from "./components/AutoCompleteDemo"
import * as serviceWorker from "./serviceWorker";
import Catalogs from "./components/catalogs"

ReactDOM.render(
  <React.StrictMode>
    <Catalogs />
    <Search/>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();

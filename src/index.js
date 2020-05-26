import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css"
import Autocomplete from "./components/autocomplete"

ReactDOM.render(
  <React.StrictMode>
    <Autocomplete />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
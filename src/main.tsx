import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import {
  PolicyProvider
} from "./context/PolicyContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <PolicyProvider>
      <App />
    </PolicyProvider>
  </React.StrictMode>
);
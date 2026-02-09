import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { JobProvider } from "./context/JobContext";
import App from "./App";
import "./styles/global.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
         <JobProvider>
          <App />
        </JobProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

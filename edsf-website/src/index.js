import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const trackingId = process.env.REACT_APP_GA_MEASUREMENT_ID; 

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router basename="/EDSF">
        <App cookiesEnabled={false} trackingId={trackingId} />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

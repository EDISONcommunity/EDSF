import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";
import ReactGA from "react-ga";
import Analytics from "react-router-ga";
import { BrowserRouter as Router} from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import "./index.css";
import { Route } from "react-router-dom";

const trackingId = process.env.REACT_APP_GA_MEASUREMENT_ID; // Replace with your Google Analytics tracking ID
// ReactGA.initialize(trackingId);


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router basename="/EDSF">
        {/* <Analytics id={trackingId} debug> */}
          <App cookiesEnabled={false} trackingId={trackingId} />
        {/* </Analytics> */}
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

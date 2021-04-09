import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";
import ReactGA from "react-ga";
import Analytics from "react-router-ga";
// import { createBrowserHistory } from "history";
import { BrowserRouter as Router} from "react-router-dom";

import "./index.css";

const trackingId = process.env.REACT_APP_GA_MEASUREMENT_ID; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

// const history = createBrowserHistory();
// Initialize google analytics page view tracking
// history.listen(location => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router basename="/EDSF">
        <Analytics id={trackingId} debug>
          <App />
        </Analytics>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

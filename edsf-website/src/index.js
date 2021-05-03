import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import Analytics from "react-router-ga";

import "./index.css";

const trackingId = process.env.REACT_APP_GA_MEASUREMENT_ID;
const history = createBrowserHistory();

export default class MyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cookiesEnabled: false,
      cookiesSet: false,
    };

    this.cookiesEnable = this.cookiesEnable.bind(this);
    this.cookiesDisable = this.cookiesDisable.bind(this);
  }

  cookiesEnable() {
    this.setState({ cookiesEnabled: true });
    this.setState({ cookiesSet: true });
    ReactGA.initialize(this.props.trackingId);
    ReactGA.set({ anonymizeIp: true });
  }

  cookiesDisable() {
    this.setState({ cookiesEnabled: false });
    this.setState({ cookiesSet: true });
  }

  render() {
    if (this.state.cookiesEnabled) {
      return (
        <Analytics id={trackingId} basename="/EDSF" debug>
          <App
            cookiesEnabled={this.state.cookiesEnabled}
            cookiesSet={this.state.cookiesSet}
            cookiesEnable={this.cookiesEnable}
            cookiesDisable={this.cookiesDisable}
            trackingId={trackingId}
            history={history}
          />
        </Analytics>
      );
    } else {
      return (
        <App
          cookiesEnabled={this.state.cookiesEnabled}
          cookiesSet={this.state.cookiesSet}
          cookiesEnable={this.cookiesEnable}
          cookiesDisable={this.cookiesDisable}
          trackingId={trackingId}
          history={history}
        />
      );
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router basename="/EDSF" history={history}>
        <MyApp />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

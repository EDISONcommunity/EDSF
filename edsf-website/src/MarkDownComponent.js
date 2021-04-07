import React, { Component } from "react";
import Markdown from "./Markdown";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import backgroundImg from "./img/background2.png";


const styles = (theme) => ({
  mainBox: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundAttachment: "fixed",
  },
  mainPaper: {
    margin: "5%",
    padding: "5%",
    backgroundColor: "rgba(255,255,255,0.9)"
  },
  footerBox: {
    height: "100px",
  },
});

class MarkDownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: "", markdown: this.props.markdown };
  }

  componentWillMount() {
    fetch(this.state.markdown)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.mainBox}>
        <Paper className={classes.mainPaper} variant="outlined">
          <Markdown>{this.state.terms}</Markdown>
        </Paper>
        <Box className={classes.footerBox} />
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MarkDownComponent);

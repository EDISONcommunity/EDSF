import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Footer from "../../../Components/Footer";
import backgroundImg from "../../../img/Untitled-4.png";
import { Typography } from "@material-ui/core";
import ed2mit03practice from "../../../files/ed2mit/ed2mit_DSAF/ed2mit03practice01-dsaf-work-environ-prep-v01.pptx.pdf";
import ed2mit03tutorial1 from "../../../files/ed2mit/ed2mit_DSAF/ed2mit03tutorial01-dsaf-research-methods-v02.pptx.pdf";
import ed2mit03tutorial2 from "../../../files/ed2mit/ed2mit_DSAF/ed2mit03tutorial01-dsaf-research-methods-v02.pptx.pdf";
import ed2mit03tutorial3 from "../../../files/ed2mit/ed2mit_DSAF/ed2mit03tutorial01-dsaf-research-methods-v02.pptx.pdf";
import ed2mit03tutorial4 from "../../../files/ed2mit/ed2mit_DSAF/ed2mit03tutorial01-dsaf-research-methods-v02.pptx.pdf";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
  },
  mainPaper: {
    margin: "5%",
    padding: "5%",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  link: {
    textDecoration: "none",
    color: "#8f857d",
  },
}));

export default function MATESED2MITTutorial(props) {
  const classes = useStyles();

  function Topics() {
    if (props.topics) {
    var topicList = props.topics.map(function (topic) {
      return (
        <li>
          <Typography>{topic}</Typography>
        </li>
      );
    });
    return <ul>{topicList}</ul>;}
    return <div></div>;
  }

  function Materials() {
    if (props.materials) {
      var materialList = props.materials.map(function (material) {
        return (
          <li>
            <Typography>
              <a
                href={material.source}
                attributes-list
                download
                className={classes.link}
              >
                {" "}
                {material.text}
              </a>
            </Typography>
          </li>
        );
      });

      return <ul>{materialList}</ul>;
    }
    return <div></div>;
  }

  return (
    <div>
      <Box
        fontFamily="fontFamily"
        fontSize="h5.fontSize"
        fontWeight="fontWeightLight"
        className={classes.headerText1}
      >
        {props.header}
      </Box>
      <Typography>{props.timeinfo}</Typography>
      <br />
      <Typography variant="h6"> Topics </Typography>
      <Topics />
      <br />
      <Typography variant="h6"> Materials </Typography>
      <Materials />
    </div>
  );
}

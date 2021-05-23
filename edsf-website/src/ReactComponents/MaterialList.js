import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme) => ({
  linkList: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    marginLeft: "7%",
    padding: "0%",
  },
}));

export default function MaterialList(props) {
  const classes = useStyles();
  function handleLectureMaterialClick(e) {
    if (props.cookiesEnabled) {
      ReactGA.event({
        category: "Links",
        action: "Lecture Material",
        label: "Lecture Material Link clicked",
        value: 1,
      });
    }
  }

  function handleVideoMaterialClick(e) {
    if (props.cookiesEnabled) {
      ReactGA.event({
        category: "Links",
        action: "Video Material",
        label: "Video Material Link clicked",
        value: 1,
      });
    }
  }

  return (
    <List className={classes.linkList}>
      <Link
        target="_blank"
        href={props.slidesURL}
        rel="noopener"
        onClick={handleLectureMaterialClick}
      >
        <Typography variant="caption" style={{ color: props.color }}>
          Lecture and practice material
        </Typography>
      </Link>
      <Link
        target="_blank"
        href={props.videoURL}
        rel="noopener"
        onClick={handleVideoMaterialClick}
      >
        <Typography variant="caption" style={{ color: props.color }}>
          Video material
        </Typography>
      </Link>
    </List>
  );
}

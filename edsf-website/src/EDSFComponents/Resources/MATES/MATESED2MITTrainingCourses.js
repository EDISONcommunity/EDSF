import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Footer from "../../../Components/Footer";
import MATESED2MITTrainings from "./MATESED2MITTrainings";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "60%",
    height: "50%",
    marginTop: "10%",
    margin: "auto",
    padding: "10%",
    paddingTop: "2%",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "scroll",
  },
  title: {
    marginBottom: "2%",
    textAlign: "center",
  },
  box1: {
    width: "80%",
    textAlign: "justify",
  },
  box2: {
    textAlign: "justify",
  },
  link: {
    textDecoration: "none",
    color: "#8f857d",
  },
}));

export default function MATESED2MITTrainingCourses() {
  const classes = useStyles();

  return (
    <Box style={{ height: "100%" }}>
      <Card variant="outlined" className={classes.card}>
        <Typography variant="h4" className={classes.title}>
          MATES ED2MIT Training Courses
        </Typography>
       <Box
            fontFamily="fontFamily"
            fontSize="subtitle1.fontSize"
            fontStyle="italic"
            fontWeight="fontWeightLight"
            className={classes.headerText1}
          >
          Here you can find all information about offered MATES ED2MIT Trainings
          and Courses.
        </Box>
        <MATESED2MITTrainings />
      </Card>
      <Footer />
    </Box>
  );
}

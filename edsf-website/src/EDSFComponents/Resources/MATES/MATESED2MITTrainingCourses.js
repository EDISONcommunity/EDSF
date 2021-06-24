import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Footer from "../../../Components/Footer";
import MATESED2MITTrainings from "./MATESED2MITTrainings";
import matesLogo from "../../../img/MatesMasterLogo_COL.png";

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
  logo: {
    width: "20%",
    margin: "auto",
    marginBottom: "2%",
    minWidth: "150px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
}));

export default function MATESED2MITTrainingCourses() {
  const classes = useStyles();

  return (
    <Box style={{ height: "100%" }}>
      <Card variant="outlined" className={classes.card}>
        <div className={classes.header}>
          <Link
            target="_blank"
            href="https://www.projectmates.eu/"
            rel="noopener"
            
          >
            <img src={matesLogo} className={classes.logo} alt="mates logo"/>
          </Link>
        </div>

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

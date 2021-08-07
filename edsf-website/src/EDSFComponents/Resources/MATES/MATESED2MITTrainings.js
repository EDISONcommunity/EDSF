import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ListItemText } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import logo1 from "../../../img/logo1.png";
import logo2 from "../../../img/logo2.png";
import logo3 from "../../../img/logo3.png";
import logo4 from "../../../img/logo4.png";

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
  topicCard: {
    width: "90%",
    height: "auto",
    backgroundColor: "rgba(223, 255, 187,0.3)",
    color: "#ffffff",
    margin: "auto",
    overflowY: "scroll",
    marginBottom: "2%",
    marginTop: "2%",
    paddingBottom: "5%",
    display: "flex",
  },
  topicText: {
    color: "#3F373E",
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
    width: "50px",
    height: "50px",
    marginRight: "5%",
  }
}));

export default function MATESED2MITTrainingCourses() {
  const classes = useStyles();

  return (
    <div>
      <List>
        <Card className={classes.topicCard}>
          <ListItem
            button
            component={RouterLink}
            to="/tutorials-2021-mates-ed2mit-dsaf"
            color="secondary"
          >
            <img src={logo1} className={classes.logo} />
            <ListItemText
              primary='MATES ED2MIT "Introduction to Data Science & Analytics Foundations for the Maritime Sector"'
              secondary="Self-study course 2021"
              className={classes.topicText}
            />
          </ListItem>
        </Card>

        <Card className={classes.topicCard}>
          <ListItem
            button
            component={RouterLink}
            to="/tutorials-2021-mates-ed2mit-dmg-february"
            color="secondary"
          >
            <img src={logo2} className={classes.logo} />
            <ListItemText
              primary='MATES ED2MIT "Industrial Data Spaces, Organisational Data Management and Governance for the Maritime Sector"'
              secondary="16, 18, 23 February 2021"
              className={classes.topicText}
            />
          </ListItem>
        </Card>

        <Card className={classes.topicCard}>
          <ListItem
            button
            component={RouterLink}
            to="/tutorials-2021-mates-ed2mit-bdit4da-january-february"
          >
            <img src={logo3} className={classes.logo} />
            <ListItemText
              primary='MATES ED2MIT "Big Data Infrastructure Technologies for Data Analytics"'
              secondary="20, 26, 28 January and 4 February 2021"
              className={classes.topicText}
            />
          </ListItem>
        </Card>

        <Card className={classes.topicCard}>
          <ListItem
            button
            component={RouterLink}
            to="/tutorials-2020-mates-ed2mit-bdit4da"
          >
            <img src={logo4} className={classes.logo} />
            <ListItemText
              primary='MATES ED2MIT "Introduction to Big Data and Data Management for Maritime Industry"'
              secondary="Pilot experience 2020"
              className={classes.topicText}
            />
          </ListItem>
        </Card>
      </List>
    </div>
  );
}

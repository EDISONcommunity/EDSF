import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "50%",
    height: "50%",
    marginTop: "10%",
    margin: "auto",
    padding: "10%",
    paddingTop: "2%",
  },
  title: {
    marginBottom: "2%",
  },
  link: {
    textDecoration: "none",
    color: "#8f857d",
    paddingTop: "2%",
  },
}));

export default function Upcoming() {
  const classes = useStyles();

  return (
    <Box>
      <Card variant="outlined" className={classes.card}>
        <Box
          fontFamily="fontFamily"
          fontSize="h4.fontSize"
          fontWeight="fontWeightLight"
          m={1}
          className={classes.title}
        >
          {" "}
          Upcoming Trainings and Workshops
        </Box>
        <Typography>
          Next course:
          <br />
          <RouterLink
            to="/tutorials-2021-mates-ed2mit-dsaf"
            className={classes.link}
          >
            Introduction to Data Science and Analytics Foundations for the
            Maritime Sector
          </RouterLink>
        </Typography>
      </Card>
    </Box>
  );
}

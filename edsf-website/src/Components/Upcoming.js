import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
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
  },
}));

export default function Upcoming() {
  const classes = useStyles();

  return (
    <Box>
      <Card variant="outlined" className={classes.card}>
        <Typography variant="h6" className={classes.title}>
          Upcoming Trainings and Workshops
        </Typography>
        <Typography>
          Next course: <br/>
          <RouterLink
            to="/tutorials-2021-mates-ed2mit-dsaf"
            className={classes.link}
          >
            Introduction to Data Science and Analytics Foundations for the
            Maritime Sector
          </RouterLink>
        </Typography>
        {/* <Typography>
          For upcoming trainings in cooperation with{" "}
          <Link
            target="_blank"
            href="https://www.projectmates.eu/"
            rel="noopener"
            color="blue"
          >
            MATES
          </Link>
          , please check their{" "}
          <Link
            target="_blank"
            href="https://www.projectmates.eu/pilotexperience/ed2mit/"
            rel="noopener"
            color="blue"
          >
            website
          </Link>{" "}
          for registration and further information.
        </Typography> */}
      </Card>
    </Box>
  );
}

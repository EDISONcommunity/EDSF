import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

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
}));

export default function DSBoK() {
  const classes = useStyles();

  return (
    <Box>
      <Card variant="outlined" className={classes.card}>
        <Typography variant="subtitle1" className={classes.title}>
          Here you will soon find information about the Data Science Body of
          Knowledge
        </Typography>
      </Card>
    </Box>
  );
}
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
    textAlign: "center",
  },
  title: {
    marginBottom: "2%",
  },
}));

export default function Deliverables() {
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
          Deliverables
        </Box>
        <Typography variant="subtitle1" className={classes.title}>
          Here you will soon find information about EDISON related Deliverables
        </Typography>
      </Card>
    </Box>
  );
}

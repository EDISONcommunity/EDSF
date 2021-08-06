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
    marginBottom: "5%",
  },
  book: {
    textAlign: "left",
  }
}));

export default function Books() {
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
          Books and Articles
        </Box>
        <Typography variant="subtitle1" className={classes.book}>
          The Data Science Framework, A View from the EDISON Project, Editors
          Juan J. Cuadrado-Gallego, Yuri Demchenko, Springer Nature Switzerland
          AG 2020, ISBN 978-3-030-51022-0, ISBN 978-3-030-51023-7.
        </Typography>
      </Card>
    </Box>
  );
}

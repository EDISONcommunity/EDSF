import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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

export default function Publications() {
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
        >          Publications
        </Box>
        <Typography variant="subtitle1" className={classes.title}>
          Here you will soon find information about EDISON related Publications.
          <br />
          <Typography>
            For now you can find a list under the following{" "}
            <Link
              href="http://www.uazone.org/demch/academic/papers-edu.html"
              target="_blank"
              rel="noopener"
              style={{ textDecoration: "none", color: "#8f857d" }}
            >
              link.
            </Link>
          </Typography>
        </Typography>
      </Card>
    </Box>
  );
}

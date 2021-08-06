import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  contactCard: {
    width: "50%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "5%",
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      padding: "10%",
    },
  },
  contactBox: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingTop: "3%",
  },
  title: {
    paddingBottom: "3%",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function Copyright() {
  const classes = useStyles();

  return (
    <Box className={classes.contactBox}>
      <Card variant="outlined" className={classes.contactCard}>
        <Box
          fontFamily="fontFamily"
          fontSize="h4.fontSize"
          fontWeight="fontWeightLight"
          m={1}
          className={classes.title}
        >
          Copyright
        </Box>
        <Typography variant="caption" align="left" className={classes.text}>
          All resources that are embedded within the website are for
          non-commercial and educational purposes. The use or re-distribution of
          any resources from this site is strictly under obligation of written
          consent by Yuri Demchenko as the maintainer of the EDISON
          Community.{" "}<br/><br/>
          <Typography variant="caption">
            All Release work of the EDISON Community is licensed under a{" "}
            <Link
              target="_blank"
              rel="noopener"
              alt="creative commons"
              href="http://creativecommons.org/licenses/by/4.0/"
              style={{ color: "#FFC89E" }}
            >
              Creative Common Attribution 4.0 International License
            </Link>
            .
          </Typography>
          <p>&copy; 2021 EDISON Community</p>
        </Typography>
      </Card>
    </Box>
  );
}

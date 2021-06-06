import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Icon from "@material-ui/core/Icon";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import IconButton from "@material-ui/core/IconButton";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import matesLogo from "../img/MatesMasterLogo_COL.png";

const useStyles = makeStyles((theme) => ({
  footerGridItemContact: {
    height: "100%",
    display: "flex",
    marginLeft: "2%",
  },
  footerGridItemMates: {
    height: "100%",
    marginRight: "2%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  footerGrid: {
    height: "5%",
    width: "100%",
    marginTop: "auto",
    marginBottom: "1%",
  },
  contactButton: {
    height: "100%",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  privacyText: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  iconBox: {
    height: "100%",
    flexDirection: "row",
    marginRight: "2%",
  },
  iconImage: {
    height: "100%",
  },
  matesBox: {
    height: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  logoBox: {
    height: "100%",
    marginLeft: "1%",
  },
  footerSpanAbove: {
    minHeight: "20%",
    [theme.breakpoints.down("sm")]: {
      height: "5%",
    },
  },
  footerSpan: {
    height: "30px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "50px",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.footerSpanAbove} />
      <Grid container direction="row" className={classes.footerGrid}>
        <Grid item xs className={classes.footerGridItemContact}>
          <RouterLink to="/contact">
            <IconButton className={classes.contactButton}>
              <MailOutlineIcon />
            </IconButton>
          </RouterLink>
          <RouterLink to="/privacy-policy" style={{ textDecoration: "none" }}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ paddingLeft: "10px" }}
              className={classes.privacyText}
            >
              Privacy Policy
            </Typography>
          </RouterLink>
          <RouterLink to="/copyright" style={{ textDecoration: "none" }}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ paddingLeft: "10px" }}
              className={classes.privacyText}
            >
              &copy; 2021 Yuri Demchenko
            </Typography>
          </RouterLink>
          <Box flexGrow="1" />
        </Grid>
        <Grid item xs className={classes.footerGridItemMates}>
          <Box className={classes.matesBox}>
            <Box flexGrow="1" />
            <Typography variant="subtitle1" color="textSecondary">
              Partnered by
            </Typography>
            <Box className={classes.logoBox}>
              <Link
                target="_blank"
                href="https://www.projectmates.eu/"
                rel="noopener"
              >
                <Icon
                  className={classes.iconRoot}
                  href="https://www.projectmates.eu/"
                >
                  <img
                    className={classes.iconImage}
                    src={matesLogo}
                    alt="matesLogo"
                  />
                </Icon>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Box className={classes.footerSpan} />
      </Grid>
    </React.Fragment>
  );
}

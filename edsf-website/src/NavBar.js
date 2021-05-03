import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import MenuPopper from "./MenuPopper";
import logoEdison from "./img/edison_logo.png";
import Box from "@material-ui/core/Box";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuPopperBox: {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  iconImage: {
    height: "100%",
  },
  iconRoot: {
    height: "7vh",
    width: "auto",
  },
  iconBox: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    padding: "0.8%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  titleBox: {
    textAlign: "center",
    height: "100%",
    width: "100%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "2%",
      paddingTop: "2%",
      display: "none",
    },
  },
  routerLink: {
    textDecoration: "none",
    color: "inherit",
  },
  navItemText: {
    fontSize: "0.7rem",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box className={classes.menuPopperBox}>
          <MenuPopper />
          <Box className={classes.titleBox}>
            <Typography
              variant="caption"
              color="textSecondary"
              className={classes.navItemText}
            >
              <RouterLink
                to="/data-science-competence-framework"
                className={classes.routerLink}
              >
                Data Science Competence Framework <br />
                {"("}CF-DS{")"}
              </RouterLink>
            </Typography>
          </Box>
          <Box className={classes.titleBox}>
            <Typography
              variant="caption"
              color="textSecondary"
              className={classes.navItemText}
            >
              <RouterLink
                to="/data-science-body-of-knowledge"
                className={classes.routerLink}
              >
                Data Science Body of Knowledge <br />
                {"("}DS-BoK{")"}
              </RouterLink>
            </Typography>
          </Box>
          <Box className={classes.titleBox}>
            <Typography
              variant="caption"
              color="textSecondary"
              className={classes.navItemText}
            >
              <RouterLink
                to="/data-science-model-curriculum"
                className={classes.routerLink}
              >
                Data Science Model Curriculum <br />
                {"("}MC-DS{")"}
              </RouterLink>
            </Typography>
          </Box>
          <Box className={classes.titleBox}>
            <Typography
              variant="caption"
              color="textSecondary"
              className={classes.navItemText}
            >
              <RouterLink
                to="/data-science-professional-profiles"
                className={classes.routerLink}
              >
                Data Science Professional Profiles <br />
                {"("}DSPP{")"}
              </RouterLink>
            </Typography>
          </Box>
        </Box>

        <Box className={classes.iconBox}>
          <Icon className={classes.iconRoot}>
            <img className={classes.iconImage} src={logoEdison} alt="logo" />
          </Icon>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

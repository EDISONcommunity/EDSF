import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import MenuPopper from "./MenuPopper";
import logoEdison from "./img/edsf-head.ico";
import Box from "@material-ui/core/Box";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuPopperBox: {
    flexGrow: 1,
    display: "flex",
  },
  iconImage: {
    height: "100%",
  },
  iconRoot: {
    height: "8vh",
    width: "auto",
  },
  iconBox: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center"
  },
  titleBox: {
    textAlign: "center",
    height: "100%",
    width: "100%",
    margin: "auto",
  },
  routerLink: {
    textDecoration: "none",
    color: "inherit",
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
              variant="h5"
              color="textSecondary"
            >
              <RouterLink to="/" className={classes.routerLink}>
                {/* EDISON Data Science Framework */}
              </RouterLink>
            </Typography>
          </Box>
        </Box>

        {/* <RouterLink to="/about" className={classes.routerLink}> */}
          <Box className={classes.iconBox}>
              {/* <Typography variant="subtitle1" color="textSecondary">About EDSF</Typography> */}
              <Icon className={classes.iconRoot}>
                <img
                  className={classes.iconImage}
                  src={logoEdison}
                  alt="logo"
                />
              </Icon>
          </Box>
        {/* </RouterLink> */}
      </Toolbar>
    </AppBar>
  );
}

import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Icon from "@material-ui/core/Icon";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Grid from "@material-ui/core/Grid";
import matesLogo from "./img/MatesMasterLogo_COL.png";
import backgroundImg from "./img/background2.png";
import ReactGA from "react-ga";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundImage: `url(${backgroundImg})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      overflow: "scroll",
    },
  },
  gridTitleItem: {
    padding: theme.spacing(2),
  },
  gridTitle: {
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2),
      fontSize: "1.5rem",
    },
  },
  gridSubtitle: {
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  gridCardContainer: {
    height: "70%",
    width: "100%",
    flexGrow: "1",
    [theme.breakpoints.down("sm")]: {
      flexGrow: "0",
    },
  },
  gridCardItem: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
  },
  cardBox: {
    flexGrow: "1",
    display: "flex",
  },
  titleBox: {
    marginTop: "2%",
    maxHeight: "10%",
  },
  cardTutorials: {
    height: "90%",
    minWidth: "300px",
    backgroundColor: "rgba(17, 111, 180,0.97)",
    color: "#ffffff",
    margin: "auto",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      minWidth: "80%",
    },
  },
  cardWorkshops: {
    height: "90%",
    backgroundColor: "rgba(36, 94, 118,0.97)",
    color: "#ffffff",
    margin: "auto",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      minWidth: "80%",
    },
  },
  cardTwitter: {
    height: "100%",
    margin: "auto",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      minWidth: "300px",
      maxWidth: "80%",
    },
  },
  cardTitle: {
    marginTop: "0%",
    paddingTop: "0%",
    marginBottom: "0%",
  },
  footerGrid: {
    height: "5%",
    width: "100%",
    marginBottom: "1%",
  },
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
  year: {
    marginLeft: "10%",
  },
  yearBox: {
    display: "flex",
    paddingTop: "5%",
  },
  yearList: {
    backgroundColor: theme.palette.background.paper,
  },
  yearActions: {
    textAlign: "flex-start",
    paddingBottom: "0%",
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
  footerSpan: {
    backgroundColor: "#63B4A7",
    height: "100px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "0%",
    },
  },

  linkList: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    marginLeft: "7%",
    padding: "0%",
  },
  linkListText: {
    color: "#28F994",
  },
  twitterBanner: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  twitterBannerText: {
    marginTop: "10%",
  },
}));

export default function Home(props) {
  const classes = useStyles();

  function TwitterComponent() {
    if (props.twitterEnabled) {
      return (
        <TwitterTimelineEmbed sourceType="profile" screenName="erasmusmates" />
      );
    }

    return (
      <Card className={classes.twitterBanner}>
        <Typography variant="caption" className={classes.twitterBannerText}>
          This is a Twitter component using cookies. For details see our privacy
          policy.
        </Typography>
        <Button onClick={(e) => props.onTwitterEnable()}>Show content</Button>
      </Card>
    );
  }

  function MaterialList(slidesURL, videoURL) {
    function handleLectureMaterialClick(e) {
      if (props.cookiesEnabled) {
        ReactGA.event({
          category: "Links",
          action: "Lecture Material",
          label: "Lecture Material Link clicked",
          value: 1,
        });
      }
    }

    function handleVideoMaterialClick(e) {
      if (props.cookiesEnabled) {
        ReactGA.event({
          category: "Links",
          action: "Video Material",
          label: "Video Material Link clicked",
          value: 1,
        });
      }
    }

    return (
      <List className={classes.linkList}>
        <Link
          target="_blank"
          href={slidesURL}
          rel="noopener"
          onClick={handleLectureMaterialClick}
        >
          <Typography variant="caption" className={classes.linkListText}>
            Lecture and practice material
          </Typography>
        </Link>
        <Link
          target="_blank"
          href={videoURL}
          rel="noopener"
          onClick={handleVideoMaterialClick}
        >
          <Typography variant="caption" className={classes.linkListText}>
            Video material
          </Typography>
        </Link>
      </List>
    );
  }

  return (
    <Box className={classes.rootBox}>
      <Grid container direction="column" className={classes.gridTitleContainer}>
        <Grid
          item
          xs
          className={classes.gridTitleItem}
          style={{ paddingBottom: "0" }}
        >
          <Typography variant="h4" className={classes.gridTitle}>
            Welcome to the EDISON Community
          </Typography>
        </Grid>
        <Grid item xs style={{ paddingTop: "0" }}>
          <Typography variant="subtitle1" className={classes.gridSubtitle}>
            Here, you can find information about the EDISON community, offered
            trainings and workshops
          </Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" className={classes.gridCardContainer}>
        <Grid item className={classes.gridCardItem} sm>
          <Typography variant="h6" className={classes.cardTitle}>
            Trainings
          </Typography>
          <Card className={classes.cardTutorials} variant="outlined">
            <Box className={classes.yearBox}>
              <Typography color="textSecondary" className={classes.year}>
                2021
              </Typography>
              <Box flexGrow="1" />
            </Box>
            <Divider variant="middle" />
            <List>
              <CardActions className={classes.yearActions}>
                <ListItem
                  button
                  component={RouterLink}
                  to="/tutorials-2021-mates-ed2mit-dmg-february"
                >
                  <ListItemText
                    primary='MATES ED2MIT "Industrial Data Spaces, Organisational Data Management and Governance for the Maritime Sector"'
                    secondary="16, 18, 23 February"
                  />
                </ListItem>
              </CardActions>
              {MaterialList(
                "https://drive.google.com/drive/folders/1Hjevyvnm8we2IgtieLMtU3WtD2KvPaMH",
                "https://surfdrive.surf.nl/files/index.php/s/lRGca7eeizWQR1p"
              )}
              <CardActions className={classes.yearActions}>
                <ListItem
                  button
                  component={RouterLink}
                  to="/tutorials-2021-mates-ed2mit-bdit4da-january-february"
                >
                  <ListItemText
                    primary='MATES ED2MIT "Big Data Infrastructure Technologies for Data Analytics"'
                    secondary="20, 26, 28 January and 4 February"
                  />
                </ListItem>
              </CardActions>
              {MaterialList(
                "https://drive.google.com/drive/u/0/folders/1su2P7NqDF24MJKnfMqtREseK4iH5HWxY",
                "https://surfdrive.surf.nl/files/index.php/s/t5WLTsVcylKkHhh"
              )}
            </List>
            <Box className={classes.yearBox}>
              <Typography color="textSecondary" className={classes.year}>
                2020
              </Typography>
              <Box flexGrow="1" />
            </Box>
            <Divider variant="middle" />
            <List>
              <CardActions className={classes.yearActions}>
                <ListItem
                  button
                  component={RouterLink}
                  to="/tutorials-2020-mates-ed2mit-bdit4da"
                >
                  <ListItemText
                    primary='MATES ED2MIT "Introduction to Big Data and Data Management for Maritime Industry"'
                    secondary="Pilot experience"
                  />
                </ListItem>
              </CardActions>
            </List>
            <Box className={classes.yearBox}>
              <Typography color="textSecondary" className={classes.year}>
                2019
              </Typography>
              <Box flexGrow="1" />
            </Box>
            <Divider variant="middle" />
            <List>
              <CardActions className={classes.yearActions}>
                <ListItem
                  button
                  component={RouterLink}
                  to="/tutorials-2019-bdit4da-hpcs"
                >
                  <ListItemText
                    primary="Big Data and Technologies for Data Analytics"
                    secondary="HPCS 2019"
                  />
                </ListItem>
                <ListItem
                  button
                  component={RouterLink}
                  to="/tutorials-2019-edsf-data-science-competence-and-education"
                >
                  <ListItemText
                    primary="EDSF Data Science Competence and Education"
                    secondary="Summer"
                  />
                </ListItem>
              </CardActions>
            </List>
          </Card>
        </Grid>
        <Grid item className={classes.gridCardItem} sm>
          <Typography variant="h6" className={classes.cardTitle}>
            Workshops
          </Typography>
          <Card className={classes.cardWorkshops} variant="outlined">
            <Box className={classes.yearBox}>
              <Typography color="textSecondary" className={classes.year}>
                2020
              </Typography>
              <Box flexGrow="1" />
            </Box>
            <Divider variant="middle" />
            <List>
              <CardActions className={classes.yearActions}>
                <ListItem
                  button
                  component={RouterLink}
                  to="/workshops-2020-fair-competences-october"
                >
                  <ListItemText
                    primary="FAIR Competences for Higher Education Design Workshop"
                    secondary="8,9 October"
                  />
                </ListItem>
              </CardActions>
            </List>

            <Box className={classes.yearBox}>
              <Typography color="textSecondary" className={classes.year}>
                2019
              </Typography>
              <Box flexGrow="1" />
            </Box>
            <Divider variant="middle" />
            <List>
              <CardActions className={classes.yearActions}>
                <ListItem
                  button
                  component={RouterLink}
                  to="/workshops-2019-edsf-release4-november"
                >
                  <ListItemText
                    primary="EDSF Release 4 Design Workshop"
                    secondary="20 November"
                  />
                </ListItem>
                <ListItem
                  button
                  component={RouterLink}
                  to="/workshops-2019-dtw-september-sandiego"
                >
                  <ListItemText
                    primary=" Data Teaching Workshop"
                    secondary="September, San Diego"
                  />
                </ListItem>
              </CardActions>
            </List>
            <Box className={classes.yearBox}>
              <Typography color="textSecondary" className={classes.year}>
                2018
              </Typography>
              <Box flexGrow="1" />
            </Box>
            <Divider variant="middle" />
            <List>
              <CardActions className={classes.yearActions}>
                <ListItem
                  button
                  component={RouterLink}
                  to="/workshops-2018-edsf-release3-july-uva"
                >
                  <ListItemText
                    primary="EDSF Release 3 Design Workshop UvA"
                    secondary="18, 19 July"
                  />
                </ListItem>
                <ListItem
                  button
                  component={RouterLink}
                  to="/workshops-2018-edsf-release3-july-agenda"
                >
                  <ListItemText
                    primary="EDSF Release 3 Design Workshop Agenda"
                    secondary="18, 19 July"
                  />
                </ListItem>
                <ListItem
                  button
                  component={RouterLink}
                  to="/workshops-2018-edison-may-denmark"
                >
                  <ListItemText
                    primary="EDISON Workshop"
                    secondary="31 May, Denmark"
                  />
                </ListItem>
              </CardActions>
            </List>
          </Card>
        </Grid>
        <Grid item className={classes.gridCardItem} sm>
          <Card className={classes.cardTwitter} variant="outlined">
            <TwitterComponent />
          </Card>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.footerGrid}>
        <Grid item xs className={classes.footerGridItemContact}>
          <RouterLink to="/contact">
            <IconButton className={classes.contactButton}>
              <MailOutlineIcon />
            </IconButton>
          </RouterLink>
          {/* </Grid>
        <Grid item xs className={classes.footerGridItemContact}> */}
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
          <Box flexGrow="1" />
        </Grid>
        {/* <Grid item xs className={classes.footerGridItem}></Grid> */}
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
    </Box>
  );
}

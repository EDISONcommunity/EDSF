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
import uvaLogo from "./img/uva.png";
import backgroundImg from "./img/background2.png";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundImage: `url(${backgroundImg})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  gridContainer: {
    height: "100%",
  },
  gridTitleContainer: {},
  gridTitleItem: { padding: theme.spacing(2) },
  gridCardContainer: {
    height: "70%",
    width: "100%",
    flexGrow: "1",
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
    height: "100%",
    backgroundColor: "rgba(17, 111, 180,0.97)",
    color: "#ffffff",
    margin: "auto",
    overflowY: "scroll",
  },
  cardWorkshops: {
    height: "100%",
    backgroundColor: "rgba(36, 94, 118,0.97)",
    color: "#ffffff",
    margin: "auto",
    overflowY: "scroll",
  },
  cardTwitter: {
    height: "100%",
    margin: "auto",
    overflowY: "scroll",
  },
  cardTitle: {
    marginTop: "5%",
    marginBottom: "3%",
  },

  footerGrid: {
    height: "5%",
    width: "100%",
    marginBottom: "1%"
  },
  footerGridItemContact: {
    height: "100%",
    display: "flex",
    marginLeft: "2%",
  },
  footerGridItemMates: {
    height: "100%",
    marginRight: "2%",
  },
  contactButton: {
    height: "100%",
    padding: "0",
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
    marginBottom: "2%",
  },
  yearList: {
    backgroundColor: theme.palette.background.paper,
  },
  yearActions: {
    textAlign: "flex-start",
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
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <Box className={classes.rootBox}>
      <Grid container direction="column" className={classes.gridContainer}>
        <Grid
          container
          xs
          direction="column"
          className={classes.gridTitleContainer}
        >
          <Grid
            item
            xs
            className={classes.gridTitleItem}
            style={{ paddingBottom: "0" }}
          >
            <Typography variant="h4">
              Welcome to the EDISON Community
            </Typography>
          </Grid>
          <Grid
            item
            xs
            className={classes.gridTitleItem}
            style={{ paddingTop: "0" }}
          >
            <Typography variant="subtitle1">
              Here, you can find information about the EDISON Data Science
              Framework, offered trainings and workshops
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="row" className={classes.gridCardContainer}>
          <Grid item className={classes.gridCardItem} xs>
            <Card className={classes.cardTutorials} variant="outlined">
              <Typography variant="h6" className={classes.cardTitle}>
                Trainings
              </Typography>
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
                  </ListItem>{" "}
                </CardActions>
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
          <Grid item className={classes.gridCardItem} xs>
            <Card className={classes.cardWorkshops} variant="outlined">
              <Typography variant="h6" className={classes.cardTitle}>
                Workshops
              </Typography>
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
          <Grid item className={classes.gridCardItem} xs>
            <Card className={classes.cardTwitter} variant="outlined">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="erasmusmates"
              />
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
              <Box className={classes.logoBox}>
                <Link
                  target="_blank"
                  href="https://www.uva.nl/en"
                  rel="noopener"
                >
                  <Icon
                    className={classes.iconRoot}
                    href="https://www.uva.nl/en"
                  >
                    <img
                      className={classes.iconImage}
                      src={uvaLogo}
                      alt="uvaLogo"
                    />
                  </Icon>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Box className={classes.footerSpan} />
        </Grid>
      </Grid>
    </Box>
  );
}

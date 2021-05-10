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
import backgroundImg from "./img/Untitled-4.png";
import titleImg from "./img/bAsset 3.png";
import edsfImg from "./img/edsf-1.png";
import ReactGA from "react-ga";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundImage: `url(${backgroundImg})`,
    backgroundAttachment: "scroll",
    backgroundSize: "cover",
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      overflow: "scroll",
    },
  },
  gridTitleItem: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  gridTitle: {
    paddingTop: theme.spacing(2),
    color: "#666666",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  gridSubtitle: {
    paddingBottom: theme.spacing(1),
    color: "#666666",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  gridCardContainer: {
    height: "100%",
    width: "100%",
    flexGrow: "1",

    [theme.breakpoints.down("sm")]: {
      flexGrow: "0",
      height: "100%",
    },
  },
  gridCardItem: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
  
    [theme.breakpoints.down("sm")]: {
      margin: "5%",
      marginTop: "10%",
    },
  },
  cardBox: {
    flexGrow: "1",
    display: "flex",
  },

  cardTutorials: {
    height: "80%",
    minWidth: "280px",
    backgroundColor: "rgba(52, 84, 209,0.8)",
    color: "#ffffff",
    margin: "auto",
    overflowY: "scroll",
    paddingBottom: "20%",
    paddingTop: "2%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "100%",
      paddingBottom: "0",
      paddingTop: "0",
    },
  },
  cardTwitter: {
    marginTop: "5%",
    marginBottom: "5%",
    height: "75%",
    width: "80%",
    marginLeft: "auto",
    marginRight: "10%",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      minWidth: "200px",
      maxWidth: "300px",
      margin: "auto",
      marginTop: "10%",
    },
  },
  cardTwitterBox: {
    marginBottom: "0px",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "100px",
    },
  },
  cardTitle: {
    marginTop: "0%",
    paddingTop: "0%",
    marginBottom: "0%",
    color: "grey",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  footerGrid: {
    height: "5%",
    width: "100%",
    marginTop: "auto",
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
  footerSpanAbove: {
    minHeight: "30%",
    [theme.breakpoints.down("sm")]: {
      height: "5%",
    },
  },
  titleSpanBelow: {
    minHeight: "10%",
    [theme.breakpoints.down("sm")]: {
      minHeight: "10%",
    },
  },
  footerSpan: {
    height: "30px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "50px",
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
    margin: "10%",
  },
  imgTitle: {
    width: "100%",
    paddingTop: "20px",
    paddingRight: "auto",
  },
  imgTitleCard: {
    marginRight: "auto",
    width: "45%",
    minWidth: "300px",
    marginLeft: "5%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  imgEdsf: {
    width: "100%",
  },
  imgEdsfCard: {
    width: "40%",
    minWidth: "300px",
    marginLeft: "auto",
    marginRight: "10%",
    marginBottom: "5%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: "60%",
    },
  },
  contributeButton: {
    backgroundColor: "#f5f3f4",
    marginTop: "10%",
    padding: "5%",
    [theme.breakpoints.down("sm")]: {
      padding: "2%",
      marginTop: "5%",
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();

  function TwitterComponent() {
    if (props.twitterEnabled) {
      return (
        <Card className={classes.cardTwitter} elevation={9}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="erasmusmates"
          />
        </Card>
      );
    }

    return (
      <div className={classes.cardTwitterBox}>
        <Card className={classes.cardTwitter} elevation={9}>
          <Card className={classes.twitterBanner}>
            <Typography variant="caption" className={classes.twitterBannerText}>
              This is a Twitter component using cookies. For details see our
              privacy policy.
            </Typography>
            <Button onClick={(e) => props.onTwitterEnable()}>
              Show content
            </Button>
          </Card>
        </Card>
      </div>
    );
  }

  function Footer() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }

  // TODO. insert edsf documents
  function ResourcesComponent() {
    return (
      <React.Fragment>
        <Typography variant="h6" className={classes.cardTitle}>
          Resources
        </Typography>
        <Card className={classes.cardTutorials} elevation={9}>
          <ResourcesEDSFReleases />
          <ResourcesEDSFCurriculaDesign />
          <ResourcesEDSFProjectDeliverables />
          <ResourcesEDSFPresentations />
          <ResourcesEDISONPublications />
          <ResourcesBooks />
          <ResourcesDatasets />
        </Card>
      </React.Fragment>
    );
  }

  function ResourcesTrainingMaterial() {
    return (
      <List>
        <ListItem>
          <Typography variant="h5">Training Material</Typography>
        </ListItem>
      </List>
    );
  }
  function ResourcesDatasets() {
    return (
      <List>
        <ListItem>
          <Typography variant="h5">Datasets</Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesBooks() {
    return (
      <List>
        <ListItem>
          <Typography variant="h5">Books and Articles</Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesEDISONPublications() {
    return (
      <List>
        <ListItem>
          <Typography variant="h5">EDISON Related Publications</Typography>
        </ListItem>
        <ListItem>
          <Typography>
            You can find a list under the following{" "}
            <Link
              href="http://www.uazone.org/demch/academic/papers-edu.html"
              target="_blank"
              rel="noopener"
              style={{ textDecoration: "none" }}
              className={classes.linkListText}
            >
              link.
            </Link>
          </Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesEDSFPresentations() {
    return (
      <List>
        <ListItem>
          <Typography variant="h5">EDSF Presentations</Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesEDSFProjectDeliverables() {
    return (
      <List>
        <ListItem>
          <Typography variant="h5">EDSF Project Deliverables</Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesEDSFCurriculaDesign() {
    return (
      <List>
        <ListItem>
          <Typography variant="h5">EDSF Curricula Design</Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesEDSFReleases() {
    return (
      <List>
        <ListItem>
          <Typography variant="h5">EDSF Releases</Typography>
        </ListItem>
        <CardActions className={classes.yearActions}>
          <ListItem>
            <Typography variant="subtitle1">
              Release 3 {"(31 December 2018)"}
            </Typography>
          </ListItem>
        </CardActions>
        <List className={classes.linkList}>
          <MaterialLink
            to="/resources-edsf-release3-cfds"
            label="Data Science Competence Framework (CF-DS)"
            action="EDSF material link"
          />
          <MaterialLink
            to="/resources-edsf-release3-dsbok"
            label="Data Science Body of Knowledge (DS-BoK)"
            action="EDSF material link"
          />
          <MaterialLink
            to="/resources-edsf-release3-mcds"
            label="Data Science Model Curriculum (MC-DS)"
            action="EDSF material link"
          />
          <MaterialLink
            to="/resources-edsf-release3-dspp"
            label="Data Science Professional Profiles (DSPP)"
            action="EDSF material link"
          />
        </List>
        <CardActions className={classes.yearActions}>
          <ListItem>
            <Typography variant="subtitle1">
              Pre-Release 3 {"(7 September 2018)"}
            </Typography>
          </ListItem>
        </CardActions>
        <List className={classes.linkList}>
          <MaterialLink
            to="/resources-edsf-prerelease3-cfds"
            label="Data Science Competence Framework (CF-DS)"
            action="EDSF material link"
          />
          <MaterialLink
            to="/resources-edsf-prerelease3-dsbok"
            label="Data Science Body of Knowledge (DS-BoK)"
            action="EDSF material link"
          />
          <MaterialLink
            to="/resources-edsf-prerelease3-mcds"
            label="Data Science Model Curriculum (MC-DS)"
            action="EDSF material link"
          />
          <MaterialLink
            to="/resources-edsf-prerelease3-dspp"
            label="Data Science Professional Profiles (DSPP)"
            action="EDSF material link"
          />
        </List>
        <CardActions className={classes.yearActions}>
          <ListItem>
            <Typography variant="subtitle1">
              Release 2 {"(3 July 2017)"}
            </Typography>
          </ListItem>
        </CardActions>
        <List className={classes.linkList}>
          <MaterialLink
            to="/resources-edsf-release2-cfds"
            label="Data Science Competence Framework (CF-DS)"
            action="EDSF material link"
          />
          <MaterialLink
            to="/resources-edsf-release2-dsbok"
            label="Data Science Body of Knowledge (DS-BoK)"
            action="EDSF material link"
          />
          <MaterialLink
            to="/resources-edsf-release2-mcds"
            label="Data Science Model Curriculum (MC-DS)"
            action="EDSF material link"
          />
          <MaterialLink
            to="/resources-edsf-release2-dspp"
            label="Data Science Professional Profiles (DSPP)"
            action="EDSF material link"
          />
        </List>
      </List>
    );
  }

  function TrainingAndWorkshopComponent() {
    return (
      <React.Fragment>
        <Typography variant="h6" className={classes.cardTitle}>
          Trainings and Workshops
        </Typography>
        <Card className={classes.cardTutorials} elevation={9}>
          <List>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/upcoming"
                color="secondary"
              >
                <Typography variant="h5" style={{ color: "#28F994" }}>
                  Upcoming events
                </Typography>
              </ListItem>
            </CardActions>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/tutorials-2021-mates-ed2mit-dmg-february"
              >
                <ListItemText
                  primary='MATES ED2MIT "Industrial Data Spaces, Organisational Data Management and Governance for the Maritime Sector"'
                  secondary="16, 18, 23 February 2021"
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
                  secondary="20, 26, 28 January and 4 February 2021"
                />
              </ListItem>
            </CardActions>
            {MaterialList(
              "https://drive.google.com/drive/u/0/folders/1su2P7NqDF24MJKnfMqtREseK4iH5HWxY",
              "https://surfdrive.surf.nl/files/index.php/s/t5WLTsVcylKkHhh"
            )}

            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/tutorials-2020-mates-ed2mit-bdit4da"
              >
                <ListItemText
                  primary='MATES ED2MIT "Introduction to Big Data and Data Management for Maritime Industry"'
                  secondary="Pilot experience 2020"
                />
              </ListItem>
            </CardActions>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2020-fair-competences-october"
              >
                <ListItemText
                  primary="FAIR Competences for Higher Education Design Workshop"
                  secondary="8,9 October 2020"
                />
              </ListItem>
            </CardActions>
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
            </CardActions>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/tutorials-2019-edsf-data-science-competence-and-education"
              >
                <ListItemText
                  primary="EDSF Data Science Competence and Education"
                  secondary="Summer 2019"
                />
              </ListItem>
            </CardActions>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2019-edsf-release4-november"
              >
                <ListItemText
                  primary="EDSF Release 4 Design Workshop"
                  secondary="20 November 2019"
                />
              </ListItem>
            </CardActions>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2019-dtw-september-sandiego"
              >
                <ListItemText
                  primary=" Data Teaching Workshop"
                  secondary="September, San Diego 2019"
                />
              </ListItem>
            </CardActions>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2018-edsf-release3-july-uva"
              >
                <ListItemText
                  primary="EDSF Release 3 Design Workshop UvA"
                  secondary="18, 19 July 2018"
                />
              </ListItem>
            </CardActions>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2018-edsf-release3-july-agenda"
              >
                <ListItemText
                  primary="EDSF Release 3 Design Workshop Agenda"
                  secondary="18, 19 July 2018"
                />
              </ListItem>
            </CardActions>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2018-edison-may-denmark"
              >
                <ListItemText
                  primary="EDISON Workshop"
                  secondary="31 May 2018, Denmark"
                />
              </ListItem>
            </CardActions>
            <CardActions className={classes.yearActions}></CardActions>
          </List>
        </Card>
      </React.Fragment>
    );
  }

  function MaterialLink(props) {
    function handleClick(e) {
      if (props.cookiesEnabled) {
        ReactGA.event({
          category: "Links",
          action: props.action,
          label: props.label,
          value: 1,
        });
      }
    }
    return (
      <div>
        <RouterLink
          target="_blank"
          to={props.to}
          rel="noopener"
          onClick={handleClick}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="caption" className={classes.linkListText}>
            {props.label}
          </Typography>
        </RouterLink>
      </div>
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

  function ImageTitle() {
    return (
      <Box className={classes.imgTitleCard}>
        <img src={titleImg} className={classes.imgTitle} alt="title" />
      </Box>
    );
  }

  function ImageEdsf() {
    return (
      <Box className={classes.imgEdsfCard}>
        <img src={edsfImg} className={classes.imgEdsf} alt="title" />
      </Box>
    );
  }

  return (
    <Box className={classes.rootBox}>
      <Grid container direction="column">
        <Grid item xs>
          <ImageTitle />
          <ImageEdsf />
        </Grid>
      </Grid>
      <Box className={classes.titleSpanBelow} />
      <Grid container direction="row" className={classes.gridCardContainer}>
        <Grid item className={classes.gridCardItem} sm>
          <ResourcesComponent />
        </Grid>
        <Grid item className={classes.gridCardItem} sm>
          <TrainingAndWorkshopComponent />
        </Grid>
        <Grid item className={classes.gridCardItem} sm>
          <RouterLink to="/edison-community" style={{ textDecoration: "none" }}>
            <Button variant="outlined" className={classes.contributeButton}>
              Contribute
            </Button>
          </RouterLink>
          <TwitterComponent />
        </Grid>
      </Grid>
      <Box className={classes.footerSpanAbove} />
      <Grid container direction="row" className={classes.footerGrid}>
        <Footer />
      </Grid>
    </Box>
  );
}

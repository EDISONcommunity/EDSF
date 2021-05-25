import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Grid from "@material-ui/core/Grid";
import backgroundImg from "../img/Untitled-4.png";
import titleImg from "../img/home-oneliner-right-new.png";
import { Button } from "@material-ui/core";
import MaterialLink from "../ReactComponents/MaterialLink";
import MaterialList from "../ReactComponents/MaterialList";
import Footer from "./Footer";

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
    marginBottom: "5%",
    textDecoration: "none",
    color: "grey",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
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
  titleSpanBelow: {
    minHeight: "1%",
    [theme.breakpoints.down("sm")]: {
      minHeight: "1%",
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
    width: "60%",
    paddingTop: "2%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  imgTitleCard: {
    marginRight: "auto",
    width: "100%",
    minWidth: "300px",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  imgEdsf: {
    width: "100%",
  },
  imgEdsfCard: {
    width: "10%",
    minWidth: "250px",
    marginLeft: "auto",
    marginRight: "10%",
    marginBottom: "0%",
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

  return (
    <Box className={classes.rootBox}>
      <Grid container direction="column">
        <Grid item xs>
          <ImageTitle />
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
          <ContributeButton />
          <TwitterComponent />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );

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

  function ResourcesComponent() {
    return (
      <React.Fragment>
        <Typography variant="h6" className={classes.cardTitle}>
          Resources
        </Typography>
        <Card className={classes.cardTutorials} elevation={9}>
          <ResourcesEDSFReleases />
          <ResourcesEDSFCurriculaDesign />
          <ResourcesEDISONProjects />
          <ResourcesEDISONDeliverables />
          <ResourcesEDSFPresentations />
          <ResourcesEDISONPublications />
          <ResourcesBooks />
          <ResourcesDatasets />
        </Card>
      </React.Fragment>
    );
  }

  function ResourcesDatasets() {
    return (
      <List>
        <ListItem>
          <Typography
            variant="h5"
            button
            component={RouterLink}
            to="/datasets"
            style={{ textDecoration: "none" }}
            color="primary"
          >
            Datasets
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>Coming soon</Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesBooks() {
    return (
      <List>
        <ListItem>
          <Typography
            variant="h5"
            button
            component={RouterLink}
            to="/books-and-articles"
            style={{ textDecoration: "none" }}
            color="primary"
          >
            Books and Articles
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>Coming soon</Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesEDISONPublications() {
    return (
      <List>
        <ListItem>
          <Typography
            variant="h5"
            button
            component={RouterLink}
            to="/publications"
            style={{ textDecoration: "none" }}
            color="primary"
          >
            EDISON Related Publications
          </Typography>
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
          <Typography
            variant="h5"
            button
            component={RouterLink}
            to="/presentations"
            style={{ textDecoration: "none" }}
            color="primary"
          >
            EDSF Presentations
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>Coming soon</Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesEDISONProjects() {
    return (
      <List>
        <ListItem>
          <Typography
            variant="h5"
            button
            component={RouterLink}
            to="/projects"
            style={{ textDecoration: "none" }}
            color="primary"
          >
            EDISON Projects
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>Coming soon</Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesEDISONDeliverables() {
    return (
      <List>
        <ListItem>
          <Typography
            variant="h5"
            button
            component={RouterLink}
            to="/deliverables"
            style={{ textDecoration: "none" }}
            color="primary"
          >
            EDISON Deliverables
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>Coming soon</Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesEDSFCurriculaDesign() {
    return (
      <List>
        <ListItem>
          <Typography
            variant="h5"
            button
            component={RouterLink}
            to="/curricula-design"
            style={{ textDecoration: "none" }}
            color="primary"
          >
            EDSF Curricula Design
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>Coming soon</Typography>
        </ListItem>
      </List>
    );
  }

  function ResourcesEDSFReleases() {
    return (
      <List>
        <ListItem>
          <Typography
            variant="h5"
            button
            component={RouterLink}
            to="/releases"
            style={{ textDecoration: "none" }}
            color="primary"
          >
            EDSF Releases
          </Typography>
        </ListItem>
        <CardActions className={classes.yearActions}>
          <ListItem>
            <Typography variant="subtitle1">Release 3</Typography>
          </ListItem>
        </CardActions>
        <List className={classes.linkList}>
          <MaterialLink
            to="/resources-edsf-release3-cfds"
            label="Data Science Competence Framework (CF-DS) R3"
            action="EDSF resource link"
            color="#28F994"
          />
          <MaterialLink
            to="/resources-edsf-release3-dsbok"
            label="Data Science Body of Knowledge (DS-BoK) R3"
            action="EDSF resource link"
            color="#28F994"
          />
          <MaterialLink
            to="/resources-edsf-release3-mcds"
            label="Data Science Model Curriculum (MC-DS) R3"
            action="EDSF resource link"
            color="#28F994"
          />
          <MaterialLink
            to="/resources-edsf-release3-dspp"
            label="Data Science Professional Profiles (DSPP) R3"
            action="EDSF resource link"
            color="#28F994"
          />
        </List>
      </List>
    );
  }

  function TrainingAndWorkshopComponent() {
    return (
      <React.Fragment>
        <RouterLink
          to="/trainings-and-workshops"
          style={{ textDecoration: "none" }}
        >
          <Typography variant="h6" className={classes.cardTitle}>
            Trainings and Workshops
          </Typography>
        </RouterLink>
        <Card className={classes.cardTutorials} elevation={9}>
          <List>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/upcoming"
                color="secondary"
              >
                <TrendingFlatIcon />
                <Typography
                  variant="h5"
                  style={{ color: "#FFC89E", marginLeft: "10px" }}
                >
                  Upcoming events
                </Typography>
              </ListItem>
            </CardActions>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/tutorials-2021-mates-ed2mit-dmg-february"
                color="secondary"
              >
                <ListItemText
                  primary='MATES ED2MIT "Industrial Data Spaces, Organisational Data Management and Governance for the Maritime Sector"'
                  secondary="16, 18, 23 February 2021"
                />
              </ListItem>
            </CardActions>
            <MaterialList
              cookiesEnabled={props.cookiesEnabled}
              color="#28F994"
              slidesURL="https://drive.google.com/drive/folders/1Hjevyvnm8we2IgtieLMtU3WtD2KvPaMH"
              videoURL="https://surfdrive.surf.nl/files/index.php/s/lRGca7eeizWQR1p"
            />
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
            <MaterialList
              cookiesEnabled={props.cookiesEnabled}
              color="#28F994"
              slidesURL="https://drive.google.com/drive/u/0/folders/1su2P7NqDF24MJKnfMqtREseK4iH5HWxY"
              videoURL="https://surfdrive.surf.nl/files/index.php/s/t5WLTsVcylKkHhh"
            />

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

  function ImageTitle() {
    return (
      <Box className={classes.imgTitleCard}>
        <img src={titleImg} className={classes.imgTitle} alt="title" />
      </Box>
    );
  }

  function ContributeButton() {
    const classes = useStyles();
    return (
      <RouterLink to="/edison-community" style={{ textDecoration: "none" }}>
        <Button variant="outlined" className={classes.contributeButton}>
          Contribute
        </Button>
      </RouterLink>
    );
  }
}

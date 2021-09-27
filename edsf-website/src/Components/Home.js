import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Grid from "@material-ui/core/Grid";
import backgroundImg from "../img/Untitled-4.png";
import edsfImg from "../img/edison2021-dsci-framework-web-v11.png";
import { Button } from "@material-ui/core";
import MaterialLink from "../ReactComponents/MaterialLink";
import MATESED2MITTrainings from "../EDSFComponents/Resources/MATES/MATESED2MITTrainings";
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
      marginTop: "20%",
    },
  },
  cardBox: {
    flexGrow: "1",
    display: "flex",
  },

  cardTutorials: {
    height: "80%",
    minWidth: "280px",
    backgroundColor: "rgba(72, 149, 239,0.5)",
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
    height: "50%",
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
    color: "#2b2d42",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  topicCard: {
    width: "90%",
    height: "auto",
    backgroundColor: "rgba(49, 137, 237,0.4)",
    color: "#ffffff",
    margin: "auto",
    overflowY: "scroll",
    marginBottom: "2%",
    marginTop: "2%",
    paddingBottom: "5%",
  },
  resourcesTitle: {
    textDecoration: "none",
    color: "#2b2d42",
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
  linkList: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    marginLeft: "7%",
    padding: "0%",
  },
  linkListText: {
    // color: "#28F994",
    color: "white",
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
    width: "65%",
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
  headerBox: {
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
    height: "30%",
    margin: "2%",
    marginLeft: "5%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  headerTextBox: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  headerImg: {
    height: "100%",
    padding: "2%",
  },
  headerImgBox: {
    height: "80%",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  headerText1: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "xx-large",
    },
  },
  headerText2: { color: "#88888e" },
  topicTitle: {
    color: "#3F373E"
  },
  topicText: {
    color: "#4D446B"
  }
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <Box className={classes.rootBox}>
      <Header />
      <Grid container direction="row" className={classes.gridCardContainer}>
        <Grid item className={classes.gridCardItem} sm>
          <ResourcesComponent />
        </Grid>
        <Grid item className={classes.gridCardItem} sm>
          <TrainingAndWorkshopComponent />
        </Grid>
        <Grid item className={classes.gridCardItem} sm>
          <TwitterComponent />
        </Grid>
      </Grid>
      {/* <ContributeButton /> */}
      <Footer />
    </Box>
  );

  function TwitterComponent() {
    if (props.twitterEnabled) {
      return (
        <React.Fragment className={classes.cardTwitterBox}>
          <Box
            fontFamily="fontFamily"
            fontSize="h5.fontSize"
            fontWeight="fontWeightLight"
            m={1}

            className={classes.cardTitle}
          >Social Media</Box>
          <Card className={classes.cardTwitter} elevation={9}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="erasmusmates"
            />
          </Card>
          <Card className={classes.cardTwitter} elevation={9}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="FAIRsFAIR_EU"
            />
          </Card>
        </React.Fragment>
      );
    }

    return (
      <div className={classes.cardTwitterBox}>
        <Box
          fontFamily="fontFamily"
          fontSize="h5.fontSize"
          fontWeight="fontWeightLight"
          m={1}
          className={classes.cardTitle}
        >Social Media</Box>
        <Card className={classes.cardTwitter} elevation={9}>
          <Card className={classes.twitterBanner}>
            <Typography variant="caption" className={classes.twitterBannerText}>
              This is a Twitter component using cookies. For details see our
              privacy policy.
            </Typography>
            <Button onClick={(e) => props.onTwitterEnable()} style={{ color: "#7A507A" }}>
              Click here to view third-party content
            </Button>
          </Card>
        </Card>
      </div>
    );
  }

  function ResourcesComponent() {
    return (
      <React.Fragment>
        <Box
          fontFamily="fontFamily"
          fontSize="h5.fontSize"
          fontWeight="fontWeightLight"
          m={1}
          className={classes.cardTitle}
        >Resources</Box>
        <Card className={classes.cardTutorials} elevation={9}>
          <ResourcesMATESCourses />
          <ResourcesEDSFReleases />
          <ResourcesDSPandFAIR />
          <ResourcesEDSFCurriculaDesign />
          <ResourcesEDISONProjects />
          {/* <ResourcesEDISONDeliverables /> */}
          <ResourcesEDSFPresentations />
          <ResourcesEDISONPublications />
          <ResourcesBooks />
          <ResourcesDatasets />
        </Card>
      </React.Fragment>
    );
  }

  function ResourcesMATESCourses() {
    return (
      <List>
        <Card className={classes.topicCard}>
          <ListItem>
            <Box
              fontFamily="fontFamily"
              fontSize="h6.fontSize"
              fontWeight="fontWeightLight"
              m={1}
              button
              component={RouterLink}
              to="/mates-ed2mit-training-courses"
              style={{ textDecoration: "none" }}
              className={classes.resourcesTitle}
            >
              MATES ED2MIT Training Courses
            </Box>
          </ListItem>
          <MATESED2MITTrainings />
        </Card>
      </List>
    );
  }

  function ResourcesDSPandFAIR() {
    return (
      <List>
        <Card className={classes.topicCard}>
          <ListItem>
            <Box
              fontFamily="fontFamily"
              fontSize="h6.fontSize"
              fontWeight="fontWeightLight"
              m={1}
              button
              component={RouterLink}
              to="/data-stewardship-professional-and-fair-competence-framework"
              style={{ textDecoration: "none" }}
              className={classes.resourcesTitle}
            >
              Data Stewardship Professional and FAIR Competence Framework
            </Box>
          </ListItem>
          <ListItem>
            <Typography variant="caption" className={classes.topicText}>
              <Link
                href="https://zenodo.org/record/4562089#.YIBZeegzZPZ"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "none" }}
                className={classes.linkListText}
              >
                FAIR Competence Framework for Higher Education {"("}Data
                Stewardship Professional Competence Framework{")"}
              </Link>
              , FAIRsFAIR Project Deliverable D7.3
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption" className={classes.topicText}>
              {" "}
              Yuri Demchenko, Lennart Stoy,{" "}
              <Link
                href="http://www.uazone.org/demch/papers/educon2021-data-stewardship-competence-fw-v02.pdf"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "none" }}
                className={classes.linkListText}
              >
                Research Data Management and Data Stewardship Competences in
                University Curriculum
              </Link>
              , In Proc. Data Science Education {"("}DSE
              {")"}, Special Session, EDUCON2021 – IEEE Global Engineering
              Education Conference, 21-23 April 2021, Vienna, Austria
            </Typography>
          </ListItem>
        </Card>
      </List>
    );
  }

  function ResourcesDatasets() {
    return (
      <List>
        <Card className={classes.topicCard}>
          <ListItem>
            <Box
              fontFamily="fontFamily"
              fontSize="h6.fontSize"
              fontWeight="fontWeightLight"
              m={1}
              button
              component={RouterLink}
              to="/datasets"
              style={{ textDecoration: "none" }}
              className={classes.resourcesTitle}
            >
              Datasets
            </Box>
          </ListItem>
          <ListItem>
            <Typography variant="caption" className={classes.topicTitle}>Coming soon</Typography>
          </ListItem>
        </Card>
      </List>
    );
  }

  function ResourcesBooks() {
    return (
      <List>
        <Card className={classes.topicCard}>
          <ListItem>
            <Box
              fontFamily="fontFamily"
              fontSize="h6.fontSize"
              fontWeight="fontWeightLight"
              m={1}
              button
              component={RouterLink}
              to="/books-and-articles"
              style={{ textDecoration: "none" }}
              className={classes.resourcesTitle}
            >
              Books and Articles
            </Box>
          </ListItem>
          <ListItem>
            <Typography variant="caption" className={classes.topicTitle}>The Data Science Framework, A View from the EDISON Project, Editors
              Juan J. Cuadrado-Gallego, Yuri Demchenko, Springer Nature Switzerland
              AG 2020, ISBN 978-3-030-51022-0, ISBN 978-3-030-51023-7.</Typography>
          </ListItem>
        </Card>
      </List>
    );
  }

  function ResourcesEDISONPublications() {
    return (
      <List>
        <Card className={classes.topicCard}>
          <ListItem>
            <Box
              fontFamily="fontFamily"
              fontSize="h6.fontSize"
              fontWeight="fontWeightLight"
              m={1}
              button
              component={RouterLink}
              to="/publications"
              style={{ textDecoration: "none" }}
              className={classes.resourcesTitle}
            >
              EDISON Related Publications
            </Box>
          </ListItem>
          <ListItem>
            <Typography variant="caption" className={classes.topicTitle}>
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
        </Card>
      </List>
    );
  }

  function ResourcesEDSFPresentations() {
    return (
      <List>
        <Card className={classes.topicCard}>
          <ListItem>
            <Box
              fontFamily="fontFamily"
              fontSize="h6.fontSize"
              fontWeight="fontWeightLight"
              m={1}
              button
              component={RouterLink}
              to="/presentations"
              style={{ textDecoration: "none" }}
              className={classes.resourcesTitle}
            >
              EDSF Presentations
            </Box>
          </ListItem>
          <ListItem>
            <Typography variant="caption" className={classes.topicTitle}>Coming soon</Typography>
          </ListItem>
        </Card>
      </List>
    );
  }

  function ResourcesEDISONProjects() {
    return (
      <List>
        <Card className={classes.topicCard}>
          <ListItem>
            <Box
              fontFamily="fontFamily"
              fontSize="h6.fontSize"
              fontWeight="fontWeightLight"
              m={1}
              button
              component={RouterLink}
              to="/projects"
              style={{ textDecoration: "none" }}
              className={classes.resourcesTitle}
            >
              EDISON Projects
            </Box>
          </ListItem>
          <ListItem>
            <Typography variant="caption" className={classes.topicTitle}>Coming soon</Typography>
          </ListItem>
        </Card>
      </List>
    );
  }

  // not in use
  function ResourcesEDISONDeliverables() {
    return (
      <List>
        <Card className={classes.topicCard}>
          <ListItem>
            <Box
              fontFamily="fontFamily"
              fontSize="h6.fontSize"
              fontWeight="fontWeightLight"
              m={1}
              button
              component={RouterLink}
              to="/deliverables"
              style={{ textDecoration: "none" }}
              className={classes.resourcesTitle}
            >
              EDISON Deliverables
            </Box>
          </ListItem>
          <ListItem>
            <Typography variant="caption" className={classes.topicTitle}>Coming soon</Typography>
          </ListItem>
        </Card>
      </List>
    );
  }

  function ResourcesEDSFCurriculaDesign() {
    return (
      <List>
        <Card className={classes.topicCard}>
          <ListItem>
            <Box
              fontFamily="fontFamily"
              fontSize="h6.fontSize"
              fontWeight="fontWeightLight"
              m={1}
              button
              component={RouterLink}
              to="/curricula-design"
              style={{ textDecoration: "none" }}
              className={classes.resourcesTitle}
            >
              EDSF Curricula Design</Box>
          </ListItem>
          <ListItem>
            <Typography variant="caption" className={classes.topicTitle}>Coming soon</Typography>
          </ListItem>
        </Card>
      </List>
    );
  }

  function ResourcesEDSFReleases() {
    return (
      <List>
        <Card className={classes.topicCard}>
          <ListItem>
            <Box
              fontFamily="fontFamily"
              fontSize="h6.fontSize"
              fontWeight="fontWeightLight"
              m={1}
              button
              component={RouterLink}
              to="/releases"
              style={{ textDecoration: "none" }}
              className={classes.resourcesTitle}
            >
              EDSF Releases</Box>
          </ListItem>
          <CardActions className={classes.yearActions}>
            <ListItem>
              <Typography className={classes.topicTitle}>Release 3</Typography>
            </ListItem>
          </CardActions>
          <List className={classes.linkList}>
            <MaterialLink
              to="/resources-edsf-release3-cfds"
              label="Data Science Competence Framework (CF-DS) R3"
              action="EDSF resource link"
              color="white"
            />
            <MaterialLink
              to="/resources-edsf-release3-dsbok"
              label="Data Science Body of Knowledge (DS-BoK) R3"
              action="EDSF resource link"
              color="white"
            />
            <MaterialLink
              to="/resources-edsf-release3-mcds"
              label="Data Science Model Curriculum (MC-DS) R3"
              action="EDSF resource link"
              color="white"
            />
            <MaterialLink
              to="/resources-edsf-release3-dspp"
              label="Data Science Professional Profiles (DSPP) R3"
              action="EDSF resource link"
              color="white"
            />
          </List>
        </Card>
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
          <Box
            fontFamily="fontFamily"
            fontSize="h5.fontSize"
            fontWeight="fontWeightLight"
            m={1}
            className={classes.cardTitle}
          >All Trainings and Workshops</Box>
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
                <Box
                  fontFamily="fontFamily"
                  fontSize="h6.fontSize"
                  fontWeight="fontWeightLight"
                  m={1}
                  style={{ color: "white" }}
                >
                  Click here for upcoming events
                </Box>
              </ListItem>
            </CardActions>
            <MATESED2MITTrainings />
            <MATESED2MITWorkshops />
          </List>
        </Card>
      </React.Fragment>
    );
  }

  function MATESED2MITWorkshops() {
    return <React.Fragment>
      <Card className={classes.topicCard}>
        <CardActions className={classes.yearActions}>
          <ListItem
            button
            component={RouterLink}
            to="/workshops-2020-fair-competences-october"
          >
            <ListItemText
              primary="FAIR Competences for Higher Education Design Workshop"
              secondary="8,9 October 2020"
              className={classes.topicText}
            />
          </ListItem>
        </CardActions>
      </Card>
      <Card className={classes.topicCard}>
        <CardActions className={classes.yearActions}>
          <ListItem
            button
            component={RouterLink}
            to="/tutorials-2019-bdit4da-hpcs"
          >
            <ListItemText
              primary="Big Data and Technologies for Data Analytics"
              secondary="HPCS 2019"
              className={classes.topicText}
            />
          </ListItem>
        </CardActions>
      </Card>
      <Card className={classes.topicCard}>
        <CardActions className={classes.yearActions}>
          <ListItem
            button
            component={RouterLink}
            to="/tutorials-2019-edsf-data-science-competence-and-education"
          >
            <ListItemText
              primary="EDSF Data Science Competence and Education"
              secondary="Summer 2019"
              className={classes.topicText}
            />
          </ListItem>
        </CardActions>
      </Card>
      <Card className={classes.topicCard}>
        <CardActions className={classes.yearActions}>
          <ListItem
            button
            component={RouterLink}
            to="/workshops-2019-edsf-release4-november"
          >
            <ListItemText
              primary="EDSF Release 4 Design Workshop"
              secondary="20 November 2019"
              className={classes.topicText}
            />
          </ListItem>
        </CardActions>
      </Card>
      <Card className={classes.topicCard}>
        <CardActions className={classes.yearActions}>
          <ListItem
            button
            component={RouterLink}
            to="/workshops-2019-dtw-september-sandiego"
          >
            <ListItemText
              primary=" Data Teaching Workshop"
              secondary="September, San Diego 2019"
              className={classes.topicText}
            />
          </ListItem>
        </CardActions>
      </Card>
      <Card className={classes.topicCard}>
        <CardActions className={classes.yearActions}>
          <ListItem
            button
            component={RouterLink}
            to="/workshops-2018-edsf-release3-july-uva"
          >
            <ListItemText
              primary="EDSF Release 3 Design Workshop UvA"
              secondary="18, 19 July 2018"
              className={classes.topicText}
            />
          </ListItem>
        </CardActions>
      </Card>
      <Card className={classes.topicCard}>
        <CardActions className={classes.yearActions}>
          <ListItem
            button
            component={RouterLink}
            to="/workshops-2018-edsf-release3-july-agenda"
          >
            <ListItemText
              primary="EDSF Release 3 Design Workshop Agenda"
              secondary="18, 19 July 2018"
              className={classes.topicText}
            />
          </ListItem>
        </CardActions>
      </Card>
      <Card className={classes.topicCard}>
        <CardActions className={classes.yearActions}>
          <ListItem
            button
            component={RouterLink}
            to="/workshops-2018-edison-may-denmark"
          >
            <ListItemText
              primary="EDISON Workshop"
              secondary="31 May 2018, Denmark"
              className={classes.topicText}
            />
          </ListItem>
        </CardActions>
      </Card>
    </React.Fragment>;
  }


  function Header() {
    return (
      <Box className={classes.headerBox}>
        <Box className={classes.headerTextBox}>
          <Box
            fontFamily="fontFamily"
            fontSize="h3.fontSize"
            fontWeight="fontWeightLight"
            className={classes.headerText1}
          >
            EDISON Community Initiative
          </Box>
          <Box
            fontFamily="fontFamily"
            fontSize="h5.fontSize"
            fontStyle="oblique"
            fontWeight="fontWeightLight"
            m={1}
            className={classes.headerText2}
          >
            Building the Data Science Profession
          </Box>
          <Box
            fontFamily="fontFamily"
            fontSize="h6.fontSize"
            fontWeight="fontWeightLight"
            m={1}
            className={classes.headerText2}
          >Maintaining the EDISON project legacy
            </Box>
            <Box
            fontFamily="fontFamily"
            fontSize="h6.fontSize"
            fontWeight="fontWeightLight"
            m={1}
            className={classes.headerText2}
          >Call for contribution EDSF Release 4 
        </Box>
        </Box>
        
        <Box className={classes.headerImgBox}>
          <img src={edsfImg} className={classes.headerImg} alt="title" />
        </Box>
      </Box>
    );
  }

  // currently not in use; no existing contribution page
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

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Footer from "../../../Components/Footer";
import backgroundImg from "../../../img/Untitled-4.png";
import { Typography } from "@material-ui/core";
import MATESED2MITTutorial from "./MATESED2MITTutorial";

import intro from "../../../files/ed2mit/ed2mit_DMG/ed2mit2021mates_00-Introduction-digital-data-training-v03.pdf";

import tutoA0101 from "../../../files/ed2mit/ed2mit_DMG/ed2mit2021tuto01.01_intro-data-spaces-v02.pdf";
import tutoA0102 from "../../../files/ed2mit/ed2mit_DMG/ed2mit2021tuto01.02_gdpr-personal-data-v03.pdf";
import tutoA02 from "../../../files/ed2mit/ed2mit_DMG/ed2mit2021tuto02_dmg-dmbok-orgroles-v03.pdf";
import tutoA03 from "../../../files/ed2mit/ed2mit_DMG/ed2mit2021tuto03_rsch-data-mngt-v02.pdf";

import practice01 from "../../../files/ed2mit/ed2mit_DMG/ed2mit_DMG_practice/dgm01-OCIO_DBHIDS-Data-Governance-Framework-Implementation-Plan-v1(2016).pdf";
import practice02 from "../../../files/ed2mit/ed2mit_DMG/ed2mit_DMG_practice/dgm02-oea-best-practices-data-gov-400760(2011).pdf";
import practice03 from "../../../files/ed2mit/ed2mit_DMG/ed2mit_DMG_practice/dgm03-data-governance-implementation_service-offering_2239(2015).pdf";
import practice04 from "../../../files/ed2mit/ed2mit_DMG/ed2mit_DMG_practice/dgm04-Enterprise-Data-Management-23-9-2015.pdf";
import practice05 from "../../../files/ed2mit/ed2mit_DMG/ed2mit_DMG_practice/dgm05-DataGovernancePlan(2007).pdf";


const styles = (theme) => ({
  mainBox: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
  },
  mainPaper: {
    margin: "5%",
    padding: "5%",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  link: {
    textDecoration: "none",
    color: "#8f857d",
  },
});

class MATESED2MIT2021DMG extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: "", markdown: this.props.markdown };
  }

  componentWillMount() {
    fetch(this.state.markdown)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.mainBox}>
        <Paper className={classes.mainPaper} variant="outlined">
          <Typography variant="h4">MATES ED2MIT Training</Typography>
          <Typography variant="h5">
            Industrial Data Spaces, Organisational Data Management & Governance
            for the Maritime Sector
          </Typography>
          <br />
          <MATESED2MITTutorial
            header="Tutorial 1: Industrial Data Spaces and European Policy"
            timeInfo="Tuesday, February 16, 2021: 15:00-18:00pm CET"
            topics={[
              "Course introduction: MATES project, Industry 4.0, Industry 5.0 and digitalisation in maritime industry",
              "Industrial Data Spaces: Definitions, Use cases",
              "European policy on Data Governance, Data Protection, GDPR",
            ]}
            materials={[
              { source: intro, text: "Introduction slides" },
              { source: tutoA0101, text: "Lecture slides Part 1" },
              { source: tutoA0102, text: "Lecture slides Part 2" },
              {
                source:
                  "https://surfdrive.surf.nl/files/index.php/s/lRGca7eeizWQR1p",
                text: "Zoom recordings",
              },
            ]}
          />
          <MATESED2MITTutorial
            header="Tutorial 2: Data Management and Governance, DAMA Architecture, Organisational roles"
            timeInfo="Thursday, February 18, 2021: 15:00-18:00pm CET"
            topics={[
              "Data Management and Governance, Best Practices",
              "DAMA Body of Knowledge (DAMA-BOK) and DAMA Data Architecture",
              "Data Governance and Data Management",
              "Data Management Maturity frameworks",
            ]}
            materials={[
              { source: tutoA02, text: "Lecture slides" },
              {
                source:
                  "https://surfdrive.surf.nl/files/index.php/s/lRGca7eeizWQR1p",
                text: "Zoom recording",
              },
            ]}
          />
          <MATESED2MITTutorial
            header="Tutorial 3: Case Study: Research Data Management, FAIR data principles. Data Stewardship. Data Management Plan (DMP) best practices and recommendations"
            timeInfo="Tuesday, February 23, 2021: 15:00-18:00pm CET"
            topics={[
              "RDM in Europe: Initiatives and projects",
              "Open Science, Open Data, Open Access, European Open Data Pilot",
              "FAIR Data Principles",
              "Responsible Data Use (citation, copyright, data restrictions)",
              "Data Management Plan",
              "Data Stewardship, Competences and demand",
            ]}
            materials={[
              { source: tutoA03, text: "Lecture slides" },
              {
                source:
                  "https://surfdrive.surf.nl/files/index.php/s/lRGca7eeizWQR1p",
                text: "Zoom recording",
              },
            ]}
          />
          <br />
          <Box
            fontFamily="fontFamily"
            fontSize="h5.fontSize"
            fontWeight="fontWeightLight"
            className={classes.headerText1}
          >
            Practice Material
          </Box>
          <ul>
            <li>
              <Typography>
                <a
                  href={practice01}
                  attributes-list
                  download
                  className={classes.link}
                >
                  Practice 1: Data Governance Framework Implementation Plan
                </a>
              </Typography>
            </li>
            <li>
              <Typography>
                <a
                  href={practice02}
                  attributes-list
                  download
                  className={classes.link}
                >
                  Practice 2: Data Governance Best Practices
                </a>
              </Typography>
            </li>
            <li>
              <Typography>
                <a
                  href={practice03}
                  attributes-list
                  download
                  className={classes.link}
                >
                  Practice 3: Data Governance Implementation Service
                </a>
              </Typography>
            </li>
            <li>
              <Typography>
                <a
                  href={practice04}
                  attributes-list
                  download
                  className={classes.link}
                >
                  Practice 4: Enterprise Data Management
                </a>
              </Typography>
            </li>
            <li>
              <Typography>
                <a
                  href={practice05}
                  attributes-list
                  download
                  className={classes.link}
                >
                  Practice 5: Data Governance Plan
                </a>
              </Typography>
            </li>
          </ul>
          <br />
          <Box
            fontFamily="fontFamily"
            fontSize="h5.fontSize"
            fontWeight="fontWeightLight"
            className={classes.headerText1}
          >
            Logistics
          </Box>
          <br />
          <Typography>
            {" "}
            Course format: 3 tutorials of 3 hours, including 2 breaks 15 min.
            Time 15:00-18:00, online on Zoom. Lectures will be recorded and
            uploaded after lecture overnight, and updated after processing -
            approx. 2-3 days.
          </Typography>
        </Paper>
        <Footer />
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MATESED2MIT2021DMG);

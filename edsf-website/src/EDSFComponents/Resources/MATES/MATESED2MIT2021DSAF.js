import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Footer from "../../../Components/Footer";
import backgroundImg from "../../../img/Untitled-4.png";
import { Typography } from "@material-ui/core";
import MATESED2MITTutorial from "./MATESED2MITTutorial";
import matesLogo from "../../../img/MatesMasterLogo_COL.png";
import Link from "@material-ui/core/Link";

import ed2mit03practice from "../../../files/ed2mit/ed2mit_DSAF/ed2mit03practice01-dsaf-work-environ-prep-v01.pptx.pdf";
import ed2mit03dsaf1 from "../../../files/ed2mit/ed2mit_DSAF/dsaf-assignment01.docx.pdf";
import ed2mit03dsaf2 from "../../../files/ed2mit/ed2mit_DSAF/dsaf-assignment02.docx.pdf";
import ed2mit03dsaf3 from "../../../files/ed2mit/ed2mit_DSAF/dsaf-assignment03.docx.pdf";

import ed2mit03tutorial0 from "../../../files/ed2mit/ed2mit_DSAF/ed2mit03tutorial00-Introduction-data-science-aanlytics-foundation-v03.pptx.pdf";
import ed2mit03tutorial1 from "../../../files/ed2mit/ed2mit_DSAF/ed2mit03tutorial01-dsaf-research-methods-v02.pptx.pdf";
import ed2mit03tutorial2 from "../../../files/ed2mit/ed2mit_DSAF/ed2mit03tutorial01-dsaf-research-methods-v02.pptx.pdf";
import ed2mit03tutorial3 from "../../../files/ed2mit/ed2mit_DSAF/ed2mit03tutorial01-dsaf-research-methods-v02.pptx.pdf";
import ed2mit03tutorial4 from "../../../files/ed2mit/ed2mit_DSAF/ed2mit03tutorial01-dsaf-research-methods-v02.pptx.pdf";

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
  header: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    width: "20%",
    margin: "auto",
    marginBottom: "2%",
    minWidth: "150px",
  },
});

class MATESED2MIT2021DSAF extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.mainBox}>
        <Paper className={classes.mainPaper} variant="outlined">
          <div className={classes.header}>
            <Link
              target="_blank"
              href="https://www.projectmates.eu/"
              rel="noopener"
            >
              <img src={matesLogo} className={classes.logo} alt="mates logo" />
            </Link>
          </div>
          <Typography variant="h4">MATES ED2MIT Training</Typography>
          <Typography variant="h5">
            Introduction to Data Science & Analytics Foundations for the
            Maritime Sector
          </Typography>
          <br />
          <Typography variant="h5">Tutorials</Typography>
          <br />
          <MATESED2MITTutorial
            header="Tutorial 0: Introduction - MATES Project and course overview"
            timeInfo="Self Study Course"
            topics={["Course Topics", "Course Practices", "Course Goals"]}
            materials={[{ source: ed2mit03tutorial0, text: "Lecture" }]}
          />
          <br />
          <MATESED2MITTutorial
            header="Tutorial 1: Research Methods in Data Science"
            timeInfo="Self Study Course"
            topics={[
              "Research methods: Importance for Data Science",
              "Research methods and Research types",
              "Research questions, Hypothesis and Hypothesis testing",
              "Business research",
              "CRISP-DM: Model, stages and tasks",
            ]}
            materials={[{ source: ed2mit03tutorial1, text: "Lecture" }]}
          />
          <MATESED2MITTutorial
            header="Tutorial 2: Statistical Data Analysis
             Basics: Data Structures, Statistical Characteristics"
            timeInfo="Self Study Course"
            topics={[
              "Types of data (quantitative data, qualitative data)",
              "Statistical characteristics",
              "Distributions (normal distribution)",
              "Measures of data dissimilarity",
            ]}
            materials={[{ source: ed2mit03tutorial2, text: "Lecture" }]}
          />
          <MATESED2MITTutorial
            header="Tutorial 3: Data Preparation and
             Processing"
            timeInfo="Self Study Course"
            topics={[
              "Data Preprocessing: An Overview",
              "Data Quality",
              "Major Tasks in Data Preprocessing",
              "Data Cleaning",
              "Data Integration",
              "Data Reduction",
              "Data Transformation and Data Discretization",
            ]}
            materials={[{ source: ed2mit03tutorial3, text: "Lecture" }]}
          />
          <MATESED2MITTutorial
            header="Tutorial 4: Data Analysis Principles
             and Techniques Exploratory Data Analysis"
            timeInfo="Self Study Course"
            topics={[
              "General aspects of Data Analysis",
              "Concepts of Data Analysis",
              "Principles of Data Analysis",
              "Data Analysis techniques",
              "Some tips for Data Analysis",
              "General aspects of the Exploratory Data Analysis",
              "Example EDA: Procrastination",
            ]}
            materials={[{ source: ed2mit03tutorial4, text: "Lecture" }]}
          />
          <MATESED2MITTutorial
            header="Tutorial 5: Qualitative Data Analysis"
            timeInfo="Self Study Course"
            topics={["To come"]}
          />
          <MATESED2MITTutorial
            header="Tutorial 6: Machine Learning: Classification Methods"
            timeInfo="Self Study Course"
            topics={["To come"]}
          />
          <MATESED2MITTutorial
            header="Tutorial 7: Machine Learning: Cluster Analysis Overview"
            timeInfo="Self Study Course"
            topics={["To come"]}
          />
          <br />
          <Typography variant="h5">Practice</Typography>
          <br />
          <MATESED2MITTutorial
            header="Practice 1: Preparation"
            timeInfo="Self Study Course"
            materials={[{ source: ed2mit03practice, text: "Slides" }]}
          />{" "}
          <br />
          <MATESED2MITTutorial
            header="Practice 2: Data cleaning and preparation with Python Pandas"
            timeInfo="Self Study Course"
            materials={[
              {
                source:
                  "https://drive.google.com/drive/folders/1VHkg9NnYgwZozorViNrn1ngmeubEmtlt?usp=sharing",
                text: "Python exercises",
              },
            ]}
          />{" "}
          <br />
          <MATESED2MITTutorial
            header="Practice 3: Data preparation and exploration with RapidMiner"
            timeInfo="Self Study Course"
            materials={[
              {
                source: ed2mit03dsaf1,
                text: "Assignment 1",
              },
              {
                source: ed2mit03dsaf2,
                text: "Assignment 2",
              },
              {
                source: ed2mit03dsaf3,
                text: "Assignment 3",
              },
              {
                source:
                  "https://drive.google.com/drive/folders/1bC4SznNGmclTdUOh6OTgbU8eo8WGpZrm?usp=sharing",
                text: "Example solutions",
              },
            ]}
          />{" "}
          <br />
          <MATESED2MITTutorial
            header="Practice 04: Data analysis and Machine Learning with RapidMiner"
            timeInfo="Self Study Course"
          />{" "}
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
            This is a self-study course for online use. There will be 7
            tutorials with lecture material in total, and 4 practical
            assignments for self-study. Practice will include working with Data
            Analytics tools for data preparation, analysis and reporting, using
            provided datasets. There are provided example solutions to some of
            the assignments.
          </Typography>
          <br />
          <Box
            fontFamily="fontFamily"
            fontSize="h5.fontSize"
            fontWeight="fontWeightLight"
            className={classes.headerText1}
          >
            Expected Outcomes
          </Box>
          <br />
          <ul>
            <li>
              <Typography>
                {" "}
                Understand the basic concepts and approaches in Data Science and
                Analytics, data analytics process and stages
              </Typography>
            </li>
            <li>
              <Typography>
                Understand main methods in statistical analysis, data
                exploration and data preparation
              </Typography>
            </li>
            <li>
              <Typography>
                {" "}
                Understand main methods in machine learning, classification
                techniques and cluster analysis
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
            Information
          </Box>
          <br />
          <Box
            fontFamily="fontFamily"
            fontSize="h6.fontSize"
            fontWeight="fontWeightLight"
            className={classes.headerText1}
          >
            Target Participants
          </Box>
          <br />
          <Typography>
            {" "}
            Technicians and VET teachers/trainers interested in Big Data and
            Data Management best practices and applications for maritime and
            offshore energy sectors. MATES partners and MATES TG experts. Women
            will be prioritized. Attendees should have
          </Typography>
          <ul>
            <li>
              <Typography>
                Basic knowledge of computer systems and Internet applications.
              </Typography>
            </li>
            <li>
              <Typography>
                Familiarity with Python programming language
              </Typography>
            </li>
            <li>
              <Typography>Basic knowledge of statistical methods</Typography>
            </li>
          </ul>
          <br />
          <Box
            fontFamily="fontFamily"
            fontSize="h6.fontSize"
            fontWeight="fontWeightLight"
            className={classes.headerText1}
          >
            Objective
          </Box>
          <br />
          <Typography>
            This course aims to provide basic knowledge and hand-on experience
            on Data Science & Analytics fbasis, methods, technologies, tools &
            best practices, which are considered as key factors in digital
            transformation for the enterprises of the future.
          </Typography>
          <br />
          <Box
            fontFamily="fontFamily"
            fontSize="h6.fontSize"
            fontWeight="fontWeightLight"
            className={classes.headerText1}
          >
            Specific Objectives
          </Box>
          <br />
          <ul>
            <li>
              <Typography>
                Provide a general overview of the necessary competences and
                skills for data handling in the maritime sector.{" "}
              </Typography>
            </li>
            <li>
              <Typography>
                Reviewing the best practices in teaching Big Data technologies
                for Data Science & Analytics, discussion on specific tasks and
                requirements for maritime sector.
              </Typography>
            </li>
            <li>
              <Typography>
                Learning about new technologies and tools used for data
                collection & handling.
              </Typography>
            </li>
          </ul>
        </Paper>
        <Footer />
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MATESED2MIT2021DSAF);

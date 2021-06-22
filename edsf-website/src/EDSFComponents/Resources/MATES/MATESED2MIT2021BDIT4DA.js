import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Footer from "../../../Components/Footer";
import backgroundImg from "../../../img/Untitled-4.png";
import { Typography } from "@material-ui/core";
import MATESED2MITTutorial from "./MATESED2MITTutorial";

import intro from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021mates_00-Introduction-digital-data-training-v03.pdf";

import tutoA0101 from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021tuto_A01.01-big-data-technologies-v03.pdf";
import tutoA0102 from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021tuto_A01.02-cloud-arch-services-v01.pdf";
import practice01cloudaws from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021practice01-cloud-aws-basics/aws2020practice01-aws-s3-ec2-services-v02.pdf";
import practice01selfstudyaws from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021practice01-cloud-aws-basics/aws2021practice00-aws-selfstudy-advice-v02.pdf";
import practice01awsbasics from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021practice01-cloud-aws-basics/aws2021practice01-aws-basics-v01.pdf";

import tutoA02 from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021tuto_A02-big-data-platforms-v02.pdf";
import practice02mapreduce from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021practice02-hadoop-emr-cloudera/ed2mit2020hwa02-mapreduce-pregel.pdf";
import practice02virtualbox from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021practice02-hadoop-emr-cloudera/ed2mit2020practice02-virtualbox-cloudera-quickstart-v02.pdf";
import practice02cloudera from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021practice02-hadoop-emr-cloudera/ed2mit2020practice02-aws-emr-config-v02.pdf";

import tutoA03 from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021tuto_A03-data-sql-nosql-v02.pdf";
import practice03sqlbasicstutorial from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021practice03-SQL-data-modelling/bdit4da_tuto03-SQL-basics-v02.pdf";
import practice03datamodelling from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021practice03-SQL-data-modelling/ed2mit2021practice03-SQL-basics-v02.pdf";

import tutoA0401 from "../../../files/ed2mit/ed2mit_BDIT4DA/ed2mit2021tuto_A04.01-data-protection-compliance-v01.pdf";

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

class MATESED2MIT2021BDIT4DA extends Component {
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
            Big Data Infrastructure Technologies for Data Analytics
          </Typography>
          <br />
          <MATESED2MITTutorial
            header="Tutorial 1: Big Data Technologies: Introduction, Reference Architecture, Big Data algorithms. Cloud based Big Data storage services"
            timeInfo="Thursday, January 20, 2021: 15:00-18:00pm CET"
            topics={[
              "Course introduction: MATES project, Industry 4.0 and digitalisation, Digital and data competences and skills",
              "Introduction into Big Data concepts, architecture and technologies, use cases",
              "Discussion: Digitalisation aspects in your organisations",
            ]}
            materials={[
              { source: intro, text: "Introduction slides" },
              { source: tutoA0101, text: "Lecture slides Part 1" },
              { source: tutoA0102, text: "Lecture slides Part 2" },
              {
                source:
                  "https://surfdrive.surf.nl/files/index.php/s/t5WLTsVcylKkHhh",
                text: "Zoom recordings",
              },
              { source: practice01cloudaws, text: "Practice AWS Cloud" },
              {
                source: practice01selfstudyaws,
                text: "Practice AWS Self Study",
              },
              {
                source: practice01awsbasics,
                text: "Practice AWS Basics",
              },
            ]}
          />
          <MATESED2MITTutorial
            header="Tutorial 2: Big Data Platforms for Data Analytics, Big Data service providers, Hadoop platform overview"
            timeInfo="Tuesday, January 26, 2021: 15:00-18:00pm CET"
            topics={[
              "Big Data algorithms, Hadoop Big Data Platform",
              "Cloud based Big Data platforms and Providers",
              "Demo and practice: working with cloud services and Hadoop cluster",
            ]}
            materials={[
              { source: tutoA02, text: "Lecture slides" },
              {
                source:
                  "https://surfdrive.surf.nl/files/index.php/s/t5WLTsVcylKkHhh",
                text: "Zoom recording",
              },
              { source: practice02cloudera, text: "Practice Cloudera" },
              { source: practice02mapreduce, text: "Practice Map Reduce" },
              { source: practice02virtualbox, text: "Practice Virtual Box" },
            ]}
          />
          <MATESED2MITTutorial
            header="Tutorial 3: SQL and NoSQL databases for Big Data processing. Hadoop Datawarehouse Hive and Dataflow scripting language Pig"
            timeInfo="Thursday, January 28, 2021: 15:00-18:00pm CET"
            topics={[
              "Data types and data models",
              "SQL databases",
              "Distributed systems: CAP theorem, ACID and Base properties",
              "NoSQL databases overview",
              "Modern cloud databases",
            ]}
            materials={[
              { source: tutoA03, text: "Lecture slides" },
              {
                source:
                  "https://surfdrive.surf.nl/files/index.php/s/t5WLTsVcylKkHhh",
                text: "Zoom recording",
              },
              { source: practice03datamodelling, text: "SQL Data Modelling" },
              { source: practice03sqlbasicstutorial, text: "SQL Basics" },
            ]}
          />
          <MATESED2MITTutorial
            header="Tutorial 4: Security and Compliance of Big Data platforms, Data protection"
            timeInfo="Thursday, February 4, 2021: 15:00-18:00pm CET."
            topics={[
              "Big Data and Cloud Security",
              "Cloud security models, services, mechanisms",
              "Cloud security best practices: AWS and Microsoft Azure",
              "Cloud Compliance and (Self-)Assessment",
              "Compliance standards, security controls",
              "CSA GRC Stack: Governance, Risk Management and Compliance",
              "PCI DSS Cloud Computing Guidelines",
              "Practice with Big Data and Cloud Compliance",
            ]}
            materials={[
              {
                source: tutoA0401,
                text: "Lecture slides",
              },
              {
                source:
                  "https://surfdrive.surf.nl/files/index.php/s/t5WLTsVcylKkHhh",
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
            Logistics
          </Box>
          <br />
          <Typography>
            {" "}
            Course format: 4 tutorials of 3 hours, including 2 breaks 15 min.
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

export default withStyles(styles, { withTheme: true })(MATESED2MIT2021BDIT4DA);

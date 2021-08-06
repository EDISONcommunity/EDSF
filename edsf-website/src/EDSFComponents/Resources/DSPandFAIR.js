import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Footer from "../../Components/Footer";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "60%",
    height: "50%",
    marginTop: "10%",
    margin: "auto",
    padding: "10%",
    paddingTop: "2%",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "scroll",
  },
  title: {
    marginBottom: "2%",
    textAlign: "center",
  },
  box1: {
    width: "80%",
    textAlign: "justify",
  },
  box2: {
    textAlign: "justify",
  },
  link: {
    textDecoration: "none",
    color: "#8f857d",
  },
  title: {
    marginBottom: "2%",
  },
}));

export default function DSPandFAIR() {
  const classes = useStyles();

  return (
    <Box style={{ height: "100%" }}>
      <Card variant="outlined" className={classes.card}>
                <Box
          fontFamily="fontFamily"
          fontSize="h4.fontSize"
          fontWeight="fontWeightLight"
          m={1}
          className={classes.title}
        >
          Data Stewardship Professional and FAIR Competence Framework
        </Box>
        <Typography variant="subtitle1" >
          Here you can find a list of related material:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="caption">
              <Link
                href="https://zenodo.org/record/4562089#.YIBZeegzZPZ"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "none" }}
                className={classes.link}
              >
                FAIR Competence Framework for Higher Education {"("}Data
                Stewardship Professional Competence Framework{")"}
              </Link>
              , FAIRsFAIR Project Deliverable D7.3
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption">
              {" "}
              Yuri Demchenko, Lennart Stoy,{" "}
              <Link
                href="http://www.uazone.org/demch/papers/educon2021-data-stewardship-competence-fw-v02.pdf"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "none" }}
                className={classes.link}
              >
                Research Data Management and Data Stewardship Competences in
                University Curriculum
              </Link>
              , In Proc. Data Science Education {"("}DSE
              {")"}, Special Session, EDUCON2021 – IEEE Global Engineering
              Education Conference, 21-23 April 2021, Vienna, Austria
            </Typography>
          </ListItem>
        </List>
      </Card>
      <Footer />
    </Box>
  );
}

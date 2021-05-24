import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
  },
  title: {
    marginBottom: "2%",
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
}));

export default function MCDS() {
  const classes = useStyles();

  return (
    <Box>
      <Card variant="outlined" className={classes.card}>
        <Typography variant="h4" className={classes.title}>
          Data Science Model Curriculum {"(MCDS)"}
        </Typography>
        <Typography variant="subtitle1" className={classes.box1}>
          This document presents the Data Science Model Curriculum, a key
          component of the EDISON Data Science Competences Framework which is in
          turn based on the study of the demand and supply sides for Data
          Science competences and skills in research and industry, as well as
          existing standards, taxonomies and studies. <br />
          The Data Science Model Curriculum is another cornerstone component of
          the whole EDISON framework. MC-DS is based on the{" "}
          <RouterLink
            to="/data-science-body-of-knowledge"
            className={classes.link}
          >
            Data Science Body of Knowledge {"(DSBoK)"}
          </RouterLink>{" "}
          .
        </Typography>
        <br />
        <Typography variant="subtitle2" className={classes.box1}>
          The following draft versions of this document are available for
          comment: The document is available under CC Attribution {"(CC BY)"}.
          This license lets others distribute, remix, tweak, and build upon your
          work, even commercially, as long as they credit you for the original
          creation. This is the most accommodating of licenses offered.
          Recommended for maximum dissemination and use of licensed materials.
        </Typography>
        <br />
        <Typography variant="h6">Releases</Typography>
        <List>
          <ListItem>
            <RouterLink
              to="/resources-edsf-release3-mcds"
              className={classes.link}
            >
              <Typography>
                EDSF Part 3. Data Science Model Curriculum {"(MC-DS)"} Release
                3, 31 December 2019
              </Typography>
            </RouterLink>
          </ListItem>
          <Typography style={{ textAlign: "center" }}>
            Previous versions:
          </Typography>
          <ListItem>
            <RouterLink
              to="/resources-edsf-prerelease3-mcds"
              className={classes.link}
            >
              <Typography>
                EDSF Part 3. Data Science Model Curriculum {"(MC-DS)"} Release
                2, 2018{" "}
              </Typography>
            </RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink
              to="/resources-edsf-release2-mcds"
              className={classes.link}
            >
              {" "}
              <Typography>
                EDSF Part 3. Data Science Model Curriculum {"(MC-DS)"} Release
                1, 2017
              </Typography>
            </RouterLink>
          </ListItem>
        </List>
        <Typography variant="caption">
          This work is licensed under a{" "}
          <Link
            target="_blank"
            rel="noopener"
            alt="creative commons"
            href="http://creativecommons.org/licenses/by/4.0/"
            style={{ color: "#FFC89E" }}
          >
            Creative Common Attribution 4.0 International License
          </Link>
          .
        </Typography>
      </Card>
    </Box>
  );
}

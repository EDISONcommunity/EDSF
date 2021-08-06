import React from "react";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MaterialLink from "../../ReactComponents/MaterialLink";
import backgroundImg from "./../../img/Untitled-4.png";
import Box from "@material-ui/core/Box";

// import PDFPage from "../../ReactComponents/PDFPage";
// import release3DSBoK from "../../files/EDSFReleases/EDISON_DS-BoK-release3-v06.pdf";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundImage: `url(${backgroundImg})`,
    backgroundAttachment: "scroll",
    backgroundSize: "cover",
  },
  listBox: {
    flex: 1,
  },
  pdfPreview: {
    flex: 1,
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
  title: {
    marginBottom: "2%",
  },
}));

export default function Releases() {
  const classes = useStyles();

  return (
    <div className={classes.rootBox}>
      <div className={classes.listBox}>
        <List>
          <ListItem>
        <Box
          fontFamily="fontFamily"
          fontSize="h4.fontSize"
          fontWeight="fontWeightLight"
          m={1}
          className={classes.title}
        >              EDSF Releases
            </Box>
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
              label="Data Science Competence Framework (CF-DS) R3"
              action="EDSF resource link"
              color="#8f857d"
            />
            <MaterialLink
              to="/resources-edsf-release3-dsbok"
              label="Data Science Body of Knowledge (DS-BoK) R3"
              action="EDSF resource link"
              color="#8f857d"
            />
            <MaterialLink
              to="/resources-edsf-release3-mcds"
              label="Data Science Model Curriculum (MC-DS) R3"
              action="EDSF resource link"
              color="#8f857d"
            />
            <MaterialLink
              to="/resources-edsf-release3-dspp"
              label="Data Science Professional Profiles (DSPP) R3"
              action="EDSF resource link"
              color="#8f857d"
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
              label="Data Science Competence Framework (CF-DS) PR3"
              action="EDSF resource link"
              color="#8f857d"
            />
            <MaterialLink
              to="/resources-edsf-prerelease3-dsbok"
              label="Data Science Body of Knowledge (DS-BoK) PR3"
              action="EDSF resource link"
              color="#8f857d"
            />
            <MaterialLink
              to="/resources-edsf-prerelease3-mcds"
              label="Data Science Model Curriculum (MC-DS) PR3"
              action="EDSF resource link"
              color="#8f857d"
            />
            <MaterialLink
              to="/resources-edsf-prerelease3-dspp"
              label="Data Science Professional Profiles (DSPP) PR3"
              action="EDSF resource link"
              color="#8f857d"
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
              label="Data Science Competence Framework (CF-DS) R2"
              action="EDSF resource link"
              color="#8f857d"
            />
            <MaterialLink
              to="/resources-edsf-release2-dsbok"
              label="Data Science Body of Knowledge (DS-BoK) R2"
              action="EDSF resource link"
              color="#8f857d"
            />
            <MaterialLink
              to="/resources-edsf-release2-mcds"
              label="Data Science Model Curriculum (MC-DS) R2"
              action="EDSF resource link"
              color="#8f857d"
            />
            <MaterialLink
              to="/resources-edsf-release2-dspp"
              label="Data Science Professional Profiles (DSPP) R2"
              action="EDSF resource link"
              color="#8f857d"
            />
          </List>
        </List>
      </div>
      {/* Possible to integrate: PDF Preview */}
      {/* <div className={classes.pdfPreview}> 
         <PDFPage pdf={release3DSBoK} />
      </div>  */}
    </div>
  );
}

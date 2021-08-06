import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import MATESED2MITTrainings from "../EDSFComponents/Resources/MATES/MATESED2MITTrainings";
import Footer from "./Footer";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflow: "scroll",
  },
  card: {
    width: "50%",
    margin: "auto",
    padding: "10%",
    paddingTop: "2%",
  },
  title: {
    margin: "5%",
    textAlign: "center",
  },
}));

export default function TrainingsMaterial(props) {
  const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>
      <Box
          fontFamily="fontFamily"
          fontSize="h4.fontSize"
          fontWeight="fontWeightLight"
          m={1}
          className={classes.title}
        >
        Trainings and Workshops
      </Box>
      <Card className={classes.card} elevation={9}>
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
          <MATESED2MITTrainings />
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
      <Footer />
    </React.Fragment>
  );
}

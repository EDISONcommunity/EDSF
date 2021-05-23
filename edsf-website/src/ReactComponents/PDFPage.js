import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Components/Footer";
import backgroundImg from "../img/Untitled-4.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    backgroundImage: `url(${backgroundImg})`,
    backgroundAttachment: "scroll",
    backgroundSize: "cover",
    overflow: "scroll",
  },
  pdfCard: {
    height: "100%",
    width: "50%",
    marginTop: "2%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));

export default function PDFPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.pdfCard}>
        <embed
          src={props.pdf}
          type="application/pdf"
          height={"100%"}
          width={"100%"}
        />
      </Card>
      <Footer />
    </div>
  );
}

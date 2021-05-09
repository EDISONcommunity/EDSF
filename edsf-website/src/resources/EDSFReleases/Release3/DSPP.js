import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button, Box, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../../../img/Untitled-4.png";
import pdf from "../../../files/EDSFReleases/EDISON_DSPP-release3-v07.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
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
  buttonBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: "2%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "30%",
  },
  pdfCard: {
    height: "100%",
    marginTop: "2%",
    marginBottom: "200px",
  },
}));

export default function DSPP() {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={classes.root}>
      <Box className={classes.buttonBox}>
        <Button
          variant="outlined"
          onClick={() => {
            if (pageNumber > 1) {
              setPageNumber(pageNumber - 1);
            }
          }}
          style={{ marginRight: "auto" }}
        >
          Previous
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            if (pageNumber < numPages) {
              setPageNumber(pageNumber + 1);
            }
          }}
          style={{ marginLeft: "auto" }}
        >
          Next
        </Button>
      </Box>
      <Card className={classes.pdfCard}>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </Card>
    </div>
  );
}

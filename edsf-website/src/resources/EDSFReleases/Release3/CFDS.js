import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import pdf from "../../../files/EDSFReleases/EDISON_CF-DS-release3-v10.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
  rootBox: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundAttachment: "scroll",
    backgroundSize: "cover",
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      overflow: "scroll",
    },
  },
}));

export default function CFDS() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => {
          if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
          }
        }}
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
      >
        Next
      </Button>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <Typography>
        Page {pageNumber} of {numPages}
      </Typography>
    </div>
  );
}

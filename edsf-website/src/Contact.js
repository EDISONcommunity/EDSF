import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  contactCard: {
    width: "50%",
    height: "50%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    textAlign: "center"
  },
  contactBox: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Box className={classes.contactBox}>
      <Card variant="outlined" className={classes.contactCard}>
        <Typography>
          You can submit comments via the mailing list:{" "}
          <Link href="mailto:edison-net@list.uva.nl">
            edison-net@list.uva.nl
          </Link>
        </Typography>
        <Typography>
          For further information or questions, please contact Yuri Demchenko:{" "}
          <Link href="mailto:y.demchenko@uva.nl">y.demchenko@uva.nl</Link>
        </Typography>
      </Card>
    </Box>
  );
}

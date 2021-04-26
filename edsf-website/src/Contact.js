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
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "10%",
    },
  },
  contactBox: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contactText: {
    paddingLeft: "15%",
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
          For further information or questions, please contact{" "}
          <Link href="mailto:y.demchenko@uva.nl">Yuri Demchenko</Link>.
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.contactText}
        >
          Yuri Demchenko
          <br />
          IVI Science Park <br />
          904 1098 XH Amsterdam
        </Typography>
      </Card>
    </Box>
  );
}

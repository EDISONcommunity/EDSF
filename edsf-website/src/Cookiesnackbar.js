import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCookiesEnable = () => {
      props.onCookiesEnable();
  }

    const handleCookiesDisable = () => {
      props.onCookiesDisable();
    };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={8000}
        onClose={handleClose}
        style={props.cookiesSet ? { display: "none" } : { display: "initial" }}
        message="We make use of Google Analytics cookies to enhance our educational programme. For details see our privacy policy. "
        action={
          <React.Fragment>
            <Button color="primary" size="small" onClick={handleCookiesEnable}>
              ACCEPT
            </Button>
            <Button
              color="secondary"
              size="small"
              onClick={handleCookiesDisable}
            >
              DECLINE
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

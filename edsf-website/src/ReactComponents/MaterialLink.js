import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import ReactGA from "react-ga";

export default function MaterialLink(props) {
  function handleClick(e) {
    if (props.cookiesEnabled) {
      ReactGA.event({
        category: "Links",
        action: props.action,
        label: props.label,
        value: 1,
      });
    }
  }
  return (
    <div>
      <RouterLink
        to={props.to}
        onClick={handleClick}
        style={{ textDecoration: "none", color: props.color }}
      >
        <Typography variant="caption">{props.label}</Typography>
      </RouterLink>
    </div>
  );
}

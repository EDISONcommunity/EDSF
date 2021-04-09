import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8DD3F6",
      light: "#98bfc0",
      dark: "#519794",
    },
    secondary: {
      main: "#245E76",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      tiny: 400,
    },
  },
});

export default theme;

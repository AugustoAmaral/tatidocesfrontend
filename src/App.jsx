import React from "react";
import Routes from "./configs/Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C8A5AE"
    },
    secondary: {
      main: "#F97A81"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;

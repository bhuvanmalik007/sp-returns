import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import HideOnScroll from "./components/HideOnScroll";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(({ mixins, spacing, transitions, zIndex }) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  appBar: {
    transition: transitions.create(['margin', 'width'], {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.leavingScreen,
    }),
    // zIndex: zIndex.drawer + 1,
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              S&P 500 Total Returns
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box display="flex" justifyContent="flex-start" p={1} bgcolor="primary">
        {"I'm a flexbox container!"}
      </Box>
    </div>
  );
}

export default App;

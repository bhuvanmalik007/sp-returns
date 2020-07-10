import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Emoji from "./Emoji";

const useStyles = makeStyles(({ breakpoints }) => ({
  heading: {
    whiteSpace: "nowrap",
    [breakpoints.down("sm")]: {
      whiteSpace: "break-spaces",
    },
    [breakpoints.up("md")]: {
      whiteSpace: "nowrap",
    },
    [breakpoints.up("lg")]: {
      whiteSpace: "nowrap",
    },
  },
}));

export default function Header({ darkMode, setDarkMode }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="default" variant="outlined">
      <Toolbar>
        <Typography variant="h6" className={classes.heading}>
          S&P 500 Total Returns by Year <Emoji symbol="💹" />
        </Typography>
        <Grid
          component="label"
          container
          alignItems="center"
          spacing={1}
          justify="flex-end"
        >
          <Grid item>
            <WbSunnyIcon />
          </Grid>
          <Grid item>
            <Switch
              checked={darkMode}
              onChange={(event, value) => setDarkMode(value)}
              name="mode"
            />
          </Grid>
          <Grid item>
            <NightsStayIcon />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

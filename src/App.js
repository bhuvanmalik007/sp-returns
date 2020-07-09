import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import React, { useState } from "react";

import Emoji from "./components/Emoji";
import ReturnsTable from "./components/ReturnsTable";
import columns from "./constants";
import data from "./data/history.json";
import { generateResults, sortAscending } from "./helperFns";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  heading: {
    whiteSpace: "nowrap",
  },
}));

function App() {
  // State
  const sortedSPReturns = sortAscending(data, "year");
  const classes = useStyles();
  const sliderMin = sortedSPReturns[0].year;
  const sliderMax = sortedSPReturns[sortedSPReturns.length - 1].year;
  const [sliderRange, setSliderRange] = useState([sliderMin, sliderMax]);
  const [tableResults, setTableResults] = useState(
    generateResults(sortedSPReturns, [sliderMin, sliderMax])
  );

  const [darkMode, setDarkMode] = useState(false);

  const handleSliderChange = (event, newValue) => {
    setSliderRange(newValue);
    setTimeout(
      () => setTableResults(generateResults(sortedSPReturns, newValue)),
      0
    );
  };

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
        typography: {
          fontFamily: [
            "Open Sans",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
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
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          height="90%"
          alignItems="center"
          mt={6}
          flexGrow={1}
          alignSelf="flex-start"
          alignContent="flex-start"
        >
          <Box width="80%" mb={3} mt={10}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              width="80%"
              mb={3}
              mt={10}
            >
              <Grid item>
                <Typography variant="h6">Select Year range:</Typography>
              </Grid>
              <Grid item>{sliderRange[0]}</Grid>
              <Grid item xs>
                <Slider
                  value={sliderRange}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  getAriaValueText={(value) => value}
                  step={1}
                  min={sliderMin}
                  max={sliderMax}
                />
              </Grid>
              <Grid item>{sliderRange[1]}</Grid>
            </Grid>
          </Box>

          <ReturnsTable headerArray={columns} tableResults={tableResults} />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;

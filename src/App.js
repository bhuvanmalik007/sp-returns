import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import HideOnScroll from "./components/HideOnScroll";
import data from "./data/history.json";
import ReturnsTable from "./components/ReturnsTable";
import { generateResults, sortAscending } from "./helperFns";
import columns from "./constants";
import Emoji from "./components/Emoji";

const useStyles = makeStyles(({ transitions }) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  appBar: {
    transition: transitions.create(["margin", "width"], {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.leavingScreen,
    }),
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
  const handleSliderChange = (event, newValue) => {
    setSliderRange(newValue);
    setTableResults(generateResults(sortedSPReturns, newValue));
  };
  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6">
              S&P 500 Total Returns by Year <Emoji symbol="💹" />
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box
        display="flex"
        flexDirection="column"
        width="90%"
        height="80%"
        alignItems="center"
        m={10}
        p={1}
        // justifyContent="center"
        alignSelf="flex-start"
        alignContent="flex-start"
      >
        <Box m={5} display="flex" width="80%">
          <Slider
            value={sliderRange}
            onChange={handleSliderChange}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            getAriaValueText={(value) => value}
            step={1}
            min={sliderMin}
            max={sliderMax}
            // marks
          />
        </Box>
        <ReturnsTable headerArray={columns} tableResults={tableResults} />
      </Box>
    </div>
  );
}

export default App;

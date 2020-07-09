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

const useStyles = makeStyles(({ mixins, spacing, transitions, zIndex }) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  appBar: {
    transition: transitions.create(["margin", "width"], {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.leavingScreen,
    }),
    // zIndex: zIndex.drawer + 1,
  },
}));

function App() {
  const sortedSPReturns = sortAscending(data, "year");
  const classes = useStyles();
  const sliderMin = sortedSPReturns[0].year;
  const sliderMax = sortedSPReturns[sortedSPReturns.length - 1].year;
  const [sliderRange, setSliderRange] = useState([sliderMin, sliderMax]);
  const initTableResults = generateResults(sortedSPReturns, [
    sliderMin,
    sliderMax,
  ]);
  const [tableResults, setTableResults] = useState(initTableResults);
  const handleSliderChange = (event, newValue) => {
    setSliderRange(newValue);
    setTableResults(generateResults(sortedSPReturns, newValue));
  };
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
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        height="100%"
        alignItems="center"
        m={10}
        p={1}
        // justifyContent="center"
        alignSelf="flex-start"
        alignContent="flex-start"
      >
        <Typography variant="h5">Filter S&P 500 Returns By Year</Typography>
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
        <ReturnsTable headerArray={columns} tableResults={tableResults} />
      </Box>
    </div>
  );
}

export default App;

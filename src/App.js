import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ReturnsTable from "./components/ReturnsTable";
import columns from "./constants";
import data from "./data/history.json";
import { generateResults, sortAscending } from "./helperFns";
import Header from "./components/Header";
import SliderComponent from "./components/SliderComponent";
import BodyBox from "./components/BodyBox";
import SliderAreaBox from "./components/SliderAreaBox";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  yearControlText: {
    whiteSpace: "nowrap",
    paddingRight: 20,
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
        overrides: {
          MuiSlider: {
            thumb: {
              color: "black",
            },
            track: {
              color: "grey",
            },
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <BodyBox>
          <SliderAreaBox>
            <Typography variant="h6" className={classes.yearControlText}>
              Select Year range:
            </Typography>
            <SliderComponent
              sliderRange={sliderRange}
              handleSliderChange={handleSliderChange}
              sliderMin={sliderMin}
              sliderMax={sliderMax}
            />
          </SliderAreaBox>
          <ReturnsTable headerArray={columns} tableResults={tableResults} />
        </BodyBox>
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  slider: {
    trackColor: "yellow",
    selectionColor: "red",
  },
}));

export default function SliderComponent({
  sliderRange,
  handleSliderChange,
  sliderMin,
  sliderMax,
}) {
  const classes = useStyles();

  return (
    <Grid container spacing={2} alignItems="center" width="80%" mb={3} mt={10}>
      <Grid item>{sliderRange[0]}</Grid>
      <Grid item xs>
        <Slider
          className={classes.slider}
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
  );
}

SliderComponent.propTypes = {
  sliderRange: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleSliderChange: PropTypes.func.isRequired,
  sliderMin: PropTypes.number.isRequired,
  sliderMax: PropTypes.number.isRequired,
};

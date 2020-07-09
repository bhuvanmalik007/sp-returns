import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

export default function SliderComponent({
  sliderRange,
  handleSliderChange,
  sliderMin,
  sliderMax,
}) {
  return (
    <Grid container spacing={2} alignItems="center" width="80%" mb={3} mt={10}>
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
  );
}

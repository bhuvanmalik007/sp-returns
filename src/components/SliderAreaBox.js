import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

const useStyles = makeStyles(({ breakpoints }) => ({
  yearControl: {
    [breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [breakpoints.up("lg")]: {
      flexDirection: "row",
    },
    flexDirection: "row",
  },
}));

export default function SliderAreaBox({ children }) {
  const classes = useStyles();

  return (
    <Box
      width="80%"
      mb={3}
      mt={10}
      display="flex"
      className={classes.yearControl}
    >
      {children}
    </Box>
  );
}

SliderAreaBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

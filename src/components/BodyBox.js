import React from "react";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

export default function BodyBox({ children }) {
  return (
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
      {children}
    </Box>
  );
}

BodyBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

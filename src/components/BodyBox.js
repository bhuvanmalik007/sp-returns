import React from "react";
import Box from "@material-ui/core/Box";

export default function Header({ children }) {
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

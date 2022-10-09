import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  base: "80em",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

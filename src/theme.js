import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: `'Yeon Sung', sans-serif`,
    // body: `'Raleway', sans-serif`,
  },
});

export default theme;

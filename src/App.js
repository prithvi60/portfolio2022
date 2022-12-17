import "./App.css";
import "@fontsource/raleway/400.css";
import "@fontsource/yeon-sung/400.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./Layout";
import theme from "./theme";
// import AnimatedCursor from "react-animated-cursor";
// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
//   fonts: {
//     heading: `'Yeon Sung', sans-serif`,
//     body: `'Raleway', sans-serif`,
//   },
//   // const colors = {
//   //   brand: {
//   //     900: "#1a365d",
//   //     800: "#153e75",
//   //     700: "#2a69ac",
//   //   },
//   // };
// };

// const theme = extendTheme({ config });
function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="210, 189, 246"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        // outerStyle={{
        //   border: '3px solid #fff'
        // }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> */}
      <Layout />
    </ChakraProvider>
  );
}

export default App;

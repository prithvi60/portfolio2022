import { Box, Heading, Text } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Lottie from "lottie-react";
import codeAnimation from "../assets/code.json";
import lineAnimation from "../assets/divider.json";

const style = {
  height: 300,
};
const linestyle = {
  height: 5,
  width: "100%",
};
// const interactivity = {
//   mode: "scroll",
//   actions: [
//     {
//       visibility: [0, 0.2],
//       type: "stop",
//       frames: [0],
//     },
//     {
//       visibility: [0.2, 0.45],
//       type: "seek",
//       frames: [0, 45],
//     },
//     {
//       visibility: [0.45, 1.0],
//       type: "loop",
//       frames: [45, 60],
//     },
//   ],
// };
export const Skill = forwardRef((_, ref) => {
  return (
    <Box
      px={4}
      py={12}
      // style={{ height: "100%" }}
      color={"#d2bdf6"}
      ref={ref}
      bg={"#1b202b"}
      // borderBottom={"2px"}
      // borderColor={"#d2bdf6"}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box
        width={"3%"}
        height={8}
        bg={"teal.100"}
        position={"absolute"}
        top={0}
        left={0}
      ></Box>

      {/* <Box>/ */}
      <Heading mb={2}>Skills:</Heading>
      <Text>React JavaScript CSS Typescript Graphql </Text>
      {/* </Box> */}
      <Box>
        {/* <Heading mb={2}>Game / meme:</Heading> */}
        <Box position={"absolute"} right={0} bottom={2}>
          <Lottie animationData={codeAnimation} style={style} loop={1} />
        </Box>
      </Box>
      <Box
        position={"absolute"}
        display={"flex"}
        justifyContent={"center"}
        bottom={0}
        width={"100%"}
      >
        <Lottie
          animationData={lineAnimation}
          style={linestyle}
          // interactivity={interactivity}
        />
      </Box>
    </Box>
  );
});

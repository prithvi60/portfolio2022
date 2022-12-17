import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  // Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Lottie from "lottie-react";
import codeAnimation from "../assets/code.json";
import lineAnimation from "../assets/divider.json";
import { FaFire } from "react-icons/fa";

const style = {
  height: 200,
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
  const [mobile] = useMediaQuery("(min-width: 800px)");
  return (
    <Box
      px={4}
      paddingBottom={16}
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
        bg={"green.500"}
        position={"absolute"}
        top={0}
        left={0}
      ></Box>
      {/* <Box>/ */}
      <Heading mb={8}>Skills:</Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={FaFire} color="green.500" />
          React Js
        </ListItem>
        <ListItem>
          <ListIcon as={FaFire} color="green.500" />
          JavaScript
        </ListItem>
        <ListItem>
          <ListIcon as={FaFire} color="green.500" />
          Typescript
        </ListItem>
        <ListItem>
          <ListIcon as={FaFire} color="green.500" />
          Css 3
        </ListItem>
        <ListItem>
          <ListIcon as={FaFire} color="green.500" />
          Graphql
        </ListItem>
        <ListItem>
          <ListIcon as={FaFire} color="green.500" />
          Node Js
        </ListItem>
        <ListItem>
          <ListIcon as={FaFire} color="green.500" />
          Figma
        </ListItem>
        <ListItem>
          <ListIcon as={FaFire} color="green.500" />
          Api integration
        </ListItem>
        <ListItem>
          <ListIcon as={FaFire} color="green.500" />
          Scss
        </ListItem>
        <ListItem>
          <ListIcon as={FaFire} color="green.500" />
          Chakra / Material UI
        </ListItem>
      </List>

      {/* </Box> */}
      <Box>
        {/* <Heading mb={2}>Game / meme:</Heading> */}
        {mobile && (
          <Box
            position={"absolute"}
            right={0}
            bottom={{
              base: 32,
              md: 32,
              lg: 12,
            }}
          >
            <Lottie
              animationData={codeAnimation}
              style={style}
              // loop={1}
            />
          </Box>
        )}
      </Box>
      <Box
        position={"absolute"}
        display={"flex"}
        justifyContent={"center"}
        bottom={8}
        // width={"100%"}
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

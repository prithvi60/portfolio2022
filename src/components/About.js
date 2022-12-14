import { Box, Heading, Highlight, Text } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Lottie from "lottie-react";
import codeAnimation from "../assets/code.json";
import lineAnimation from "../assets/divider.json";

const style = {
  height: 300,
};
const linestyle = {
  height: 5,
  width:"100%"
};
const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [45, 60],
    },
  ],
};
export const About = forwardRef((_, ref) => {
  return (
    <Box
      p={4}
      style={{ height: "100%" }}
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
        width={"8%"}
        height={8}
        bg={"purple.200"}
        position={"absolute"}
        top={0}
        left={0}
      ></Box>
      <Box mb={4}>
        <Box display={"flex"} justifyContent={"center"} width={"100%"}>
          <Heading mb={2}>About me:</Heading>
        </Box>
        <Highlight
          query={["Prithvi", "HTML, CSS, and JavaScript"]}
          styles={{ px: "1", py: "1", color: "teal.100", fontWeight: "bold" }}
        >
          Hello! My name is Prithvi and I am a front end developer with a
          passion for creating visually stunning and user-friendly websites.
          With several years of experience in the field, I have honed my skills
          in HTML, CSS, and JavaScript, and have a strong understanding of
          responsive design and mobile optimization. I am constantly seeking to
          learn and stay up-to-date with the latest web development technologies
          and trends, and love finding creative solutions to complex problems.
          In my previous projects, I have worked with a wide range of clients
          and industries, and have enjoyed the challenge of bringing their
          unique vision to life through engaging, interactive web experiences.
          In my current position, I am responsible for the design and
          implementation of the front end of a large e-commerce website, and
          have successfully contributed to an increase in user engagement and
          conversions. I am excited to continue growing and refining my skills
          as a front end developer, and am open to new opportunities to
          collaborate and create innovative, dynamic websites. Thank you for
          considering me for your project!
        </Highlight>
      </Box>
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

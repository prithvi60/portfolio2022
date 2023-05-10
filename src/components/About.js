import { Box,} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Lottie from "lottie-react";
// import codeAnimation from "../assets/code.json";
import lineAnimation from "../assets/divider.json";

// const style = {
//   height: 300,
// };
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
export const About = forwardRef((_, ref) => {
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
      <Box mb={4} textAlign={"center"}>
        <Box display={"flex"} justifyContent={"center"} width={"100%"}>
          {/* <Heading mb={8}>About me:</Heading> */}
        </Box>
        {/* <Highlight
          query={["Prithvi", "HTML, CSS, and JavaScript"]}
          styles={{ px: "1", py: "1", color: "teal.100", fontWeight: "bold" }}
        >
          Hello! My name is Prithvi and I am a front end developer with a
          passion for creating visually stunning and user-friendly websites.
          With sufficient experience in the field, I have honed my skills in
          HTML, CSS, and JavaScript, and have a strong understanding of
          responsive design and mobile optimization. I am constantly seeking to
          learn and stay up-to-date with the latest web development technologies
          and trends, and love finding creative solutions to complex problems.
          In my previous projects, I have worked with a wide range of clients
          and industries, and have enjoyed the challenge of bringing their
          unique vision to life through engaging, interactive web experiences. I
          am excited to continue growing and refining my skills as a front end
          developer, and am open to new opportunities to collaborate and create
          innovative, dynamic websites.
        </Highlight> */}
        <div
          style={{ padding: "3%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: "100vh",
              width: "100vw",
              borderRadius: "5%",
            }}
          >
            <iframe
              title="intro"
              src="https://www.loom.com/embed/b85679a60d4941a8b27ce10c95b0a5e3"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
        {/* <Text color={"green.500"}> MY PIC HERE</Text> */}
      </Box>
      {/* <Box>/ */}
      {/* <Heading mb={2}>Skills:</Heading>
      <Text>React JavaScript CSS Typescript Graphql </Text> */}
      {/* </Box> */}
      <Box
        position={"absolute"}
        display={"flex"}
        justifyContent={"center"}
        bottom={8}
        // width={"100%"}
      >
        <Lottie animationData={lineAnimation} style={linestyle} />
      </Box>
    </Box>
  );
});

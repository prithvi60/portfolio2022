import { Box, Heading, Highlight, Text } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { FaReact } from "react-icons/fa";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json";
const style = {
  height: 300,
};

export const Contact = forwardRef((_, ref) => {
  return (
    <Box
      p={4}
      style={{ height: "100%" }}
      color={"#d2bdf6"}
      ref={ref}
      bg={"#1b202b"}
      position={"relative"}
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
          <Heading mb={2}>Contact me:</Heading>
        </Box>
        <Box display={"flex"} justifyContent={"center"} width={"100%"}>
          <Highlight
            query={["Prithvi", "HTML, CSS, and JavaScript"]}
            styles={{
              px: "1",
              py: "1",
              color: "teal.100",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Reach me on calendly or email.
          </Highlight>
        </Box>
      </Box>
      <Box position={"absolute"} right={0} bottom={4}>
        <Lottie animationData={contactAnimation} style={style} />
      </Box>
      <Box
        position={"absolute"}
        bottom={4}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        <Text>Made with React</Text>
        <FaReact />
      </Box>
    </Box>
  );
});

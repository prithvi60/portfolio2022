import { Box, Button, Heading, Highlight, Image, Text } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { FaReact } from "react-icons/fa";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json";
import Profile from "../assets/prithvi.jpeg";

const style = {
  height: 300,
};

export const Contact = forwardRef((_, ref) => {
  return (
    <Box
      px={4}
      py={12}
      style={{ height: "100%" }}
      color={"#d2bdf6"}
      ref={ref}
      bg={"#1b202b"}
      position={"relative"}
    >
      <Box
        width={"3%"}
        height={8}
        bg={"teal.100"}
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
            Feel free to setup up a Calendly call or reach me in any other way!
            I will try to get back to you as fast as I can.
          </Highlight>
        </Box>
      </Box>
      <Box>
        <Box boxSize="xs">
          <Image src={Profile} borderRadius="lg" />
        </Box>
        <Button>See my resume</Button>
        <Button>Calendly meet</Button>
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

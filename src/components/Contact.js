import { Box, Heading, Highlight, Text } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { FaReact } from "react-icons/fa";

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
      <Box mb={4}>
        <Heading mb={2}>Contact me:</Heading>
        <Highlight
          query={["Prithvi", "HTML, CSS, and JavaScript"]}
          styles={{ px: "1", py: "1", color: "teal.100", fontWeight: "bold" }}
        >
          Reach me on calendly or email.
        </Highlight>
      </Box>

      <Box
        position={"absolute"}
        bottom={2}
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

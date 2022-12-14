import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
export default function AnimatedLanding({ handleClick }) {
  return (
    <Stack height={"100vh"} width={"100vw"} position={"absolute"} top={0}>
      <motion.svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <pattern
            id="smallGrid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="lightblue"
              strokeWidth="0.5"
              variants={pathVariants}
            />
          </pattern>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <motion.path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="lightblue"
              strokeWidth="1"
              variants={pathVariants}
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </motion.svg>
      <Box
        width={"100%"}
        bottom={12}
        position={"absolute"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Button colorScheme={"purple"} onClick={handleClick}>
          {" "}
          Scroll Down
        </Button>
      </Box>
    </Stack>
  );
}

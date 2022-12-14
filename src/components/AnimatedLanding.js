import { Box, Heading, IconButton, keyframes, Stack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleDown } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
const animationKeyframes = keyframes`
0% {
  transform:scale(0);
}
70% {
  transform:scale(1);

  box-shadow: 0 0 0 50px rgba(#d2bdf6;
}
  100% {
    transform:scale(0.7);
  box-shadow: 0 0 0 0 rgba(#d2bdf6);
}
`;
const animation = `${animationKeyframes} 2s  infinite`;
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};
export default function AnimatedLanding({ handleClick }) {
  return (
    <Stack
      height={"100vh"}
      width={"100vw"}
      position={"absolute"}
      top={0}
      bg={"#1b202b"}
    >
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
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="m 0.002 0.004 L 0 10 Q 4.783 3.108 9.956 9.959 L 9.979 0.004 Q 4.623 6.602 0.002 0.004"
              fill="none"
              stroke="#2C5282"
              strokeWidth="1"
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
              stroke="#9AE6B4"
              strokeWidth="0"
              variants={pathVariants}
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </motion.svg>
      <Box
        width={"100%"}
        top={"60%"}
        position={"absolute"}
        display={"flex"}
        justifyContent={"center"}
        color={"whiteAlpha.900"}
      >
        <Heading as={"h1"} size={"2xl"}>
          I'm Prithvi {`->`} {"\u00A0"}
        </Heading>

        <Heading as={"h1"} size={"2xl"}>
          <ReactTypingEffect
            text={[
              "Freelancer.",
              "Frontend Developer.",
              "Coder.",
              "Problem solver.",
            ]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1500}
            typingDelay={500}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        style={{ color: "white", textOverflow: "ellipsis" }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
        </Heading>
      </Box>
      <Box
        width={"100%"}
        bottom={12}
        position={"absolute"}
        display={"flex"}
        justifyContent={"center"}
      >
        <IconButton
          background={"purple.200"}
          _hover={{
            background: "purple.300",
          }}
          isRound
          aria-label="Scroll"
          onClick={handleClick}
          size={"sm"}
          icon={<FaArrowAltCircleDown />}
          as={motion.div}
          animation={animation}
          boxShadow={"0 0 0 0 rgba(#5a99d4, .5)"}
        />
      </Box>
    </Stack>
  );
}

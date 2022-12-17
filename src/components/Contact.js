import {
  Box,
  Button,
  Heading,
  Highlight,
  Image,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { FaReact } from "react-icons/fa";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json";
import Profile from "../assets/prithvi.jpeg";
import Doc from "../assets/Resume.pdf";
const style = {
  height: 200,
};

export const Contact = forwardRef((_, ref) => {
  const [mobile] = useMediaQuery("(min-width: 800px)");

  return (
    <Box
      px={4}
      paddingBottom={16}
      style={{ height: "100%" }}
      color={"#d2bdf6"}
      ref={ref}
      bg={"#1b202b"}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
    >
      <Box
        width={"3%"}
        height={8}
        bg={"green.500"}
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
              color: "green.500",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Feel free to setup up a Calendly call or reach me in any other way!
            I will try to get back to you as fast as I can.
          </Highlight>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{
          base: "column",
          md: "column",
          lg: "row",
        }}
        gap={6}
        alignItems={"center"}
      >
        <Box boxSize={"3xs"}>
          <Image src={Profile} borderRadius="lg" />
        </Box>
        <Link
          href={Doc}
          download="Prithvi_Resume"
          target="_blank"
          style={{
            textDecoration: "none",
          }}
        >
          <Button colorScheme={"purple"} mt={mobile ? 0 : 20}>
            See my resume
          </Button>
        </Link>
        <Link
          href={"https://calendly.com/prithvi-freelancer/30min"}
          isExternal
          style={{
            textDecoration: "none",
          }}
        >
          <Button colorScheme={"purple"}>Calendly meet</Button>
        </Link>
      </Box>
      {mobile && (
        <Box position={"absolute"} right={0} bottom={4}>
          <Lottie animationData={contactAnimation} style={style} />
        </Box>
      )}
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

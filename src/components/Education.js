import {
  Box,
  Card,
  CardBody,
  Heading,
  Highlight,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Lottie from "lottie-react";
import lineAnimation from "../assets/divider.json";
import Profile from "../assets/portfolio.json";

const linestyle = {
  height: 5,
  width: "100%",
};
const Tile = ({ item, index }) => (
  <Card
    minW={{
      base: "80%",
      md: "80%",
      lg: "unset",
    }}
    flexGrow={1}
    color={"#d2bdf6"}
    bg={"#2f3747"}
    _dark={{
      bg: "#2f3747",
    }}
    key={index}
  >
    <CardBody>
      {/* <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        borderRadius="lg"
      /> */}
      <Stack
        mt="6"
        spacing="3"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box display={"flex"} gap={4} alignItems={"center"}>
          <Box boxSize={"20"}>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="md"
            />
          </Box>
          <Heading size="md">{item.title}</Heading>
        </Box>
        {/* <Text textAlign={"center"}>
          Worked in a boutique agency invloved in development of planner app for
          a unicorn media company
        </Text> */}
      </Stack>
    </CardBody>
    {/* <Divider />
      <CardFooter>
        <Button variant="ghost" colorScheme="blue">
          Add to cart
        </Button>
      </CardFooter> */}
  </Card>
);
export const Education = forwardRef((_, ref) => {
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
          <Heading mb={2}>Education:</Heading>
        </Box>
        <Highlight
          query={["design"]}
          styles={{ px: "1", py: "1", color: "teal.100", fontWeight: "bold" }}
        >
          Basic Qualification and Certifications I actively learn new
          technologies and participate in tech-related activities. Below are
          some of my major certifications.
        </Highlight>
      </Box>
      <Text>
        College Of Engineering, Guindy (CEG) BE ECE 2016 - 2020 ⚡ I have
        studied core subjects like Computer Networks,Object oriented
        programming, Microprocessors, Security, etc. ⚡ I have also completed
        various online tutorials in Youtube for Backend , Web , Mobile App
        Development, etc. ⚡ I have foundation in Electronics And Communication
        Engineering course.
      </Text>
      <Heading>Certification:</Heading>
      <Box
        display={"flex"}
        gap={4}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          md: "column",
          lg: "row",
        }}
      >
        {Profile.education.map((item, index) => (
          <Tile item={item} index={index} />
        ))}
      </Box>

      <Box
        position={"absolute"}
        display={"flex"}
        justifyContent={"center"}
        bottom={0}
        width={"100%"}
      >
        <Lottie animationData={lineAnimation} style={linestyle} />
      </Box>
    </Box>
  );
});

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Lottie from "lottie-react";
import lineAnimation from "../assets/divider.json";
import { FaExternalLinkAlt } from "react-icons/fa";
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
    <Link href={item.link} isExternal>
      <CardHeader justifyContent={"flex-end"} display={"flex"}>
        <FaExternalLinkAlt />
      </CardHeader>
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
          <Heading size="md">{item.title}</Heading>
          <Text textAlign={"center"}>{item.description}</Text>
          <Text textAlign={"center"} textColor={"teal.100"} fontSize={"xs"}>{item.technology}</Text>
        </Stack>
      </CardBody>
      {/* <Divider />
    <CardFooter>
      <Button variant="ghost" colorScheme="blue">
        Add to cart
      </Button>
    </CardFooter> */}
    </Link>
  </Card>
);
export const Project = forwardRef((_, ref) => {
  return (
    <Box
      px={4}
      paddingBottom={16}
      s
      // style={{ height: "100%" }}
      color={"#d2bdf6"}
      ref={ref}
      bg={"#1b202b"}
      // borderBottom={"2px"}
      // borderColor={"#d2bdf6"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
      position={"relative"}
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
          <Heading mb={8}>Projects:</Heading>
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap={4}
        flexDirection={{
          base: "column",
          md: "column",
          lg: "row",
        }}
      >
        {Profile.projects.map((item, index) => (
          <Tile item={item} key={index} />
        ))}
      </Box>
      <Link
        href={"https://github.com/prithvi60"}
        isExternal
        style={{
          textDecoration: "none",
        }}
      >
        <Button mt={4} colorScheme={"purple"}>
          More Github projects
        </Button>
      </Link>
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

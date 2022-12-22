import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Link,
  Stack,
  Text,
  useMediaQuery,
  // Divider,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Lottie from "lottie-react";
import lineAnimation from "../assets/divider.json";
import {
  FaExternalLinkAlt,
  FaReact,
  FaCss3,
  FaJsSquare,
  FaHtml5,
  FaNode,
} from "react-icons/fa";
import {
  SiRedux,
  SiMongodb,
  SiTypescript,
  SiNpm,
  SiFigma,
  SiStorybook,
  SiHasura,
  SiApollographql,
  SiChakraui,
  SiMaterialui,
  SiTestinglibrary,
  SiSass,
  SiThreedotjs,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

import Profile from "../assets/portfolio.json";
const icons = [
  { name: "React", icon: <FaReact /> },
  { name: "Css", icon: <FaCss3 /> },
  { name: "Javascript", icon: <FaJsSquare /> },
  { name: "Html", icon: <FaHtml5 /> },
  { name: "NodeJS", icon: <FaNode /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Mongodb", icon: <SiMongodb /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "functional npm dependencies", icon: <SiNpm /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Storybook", icon: <SiStorybook /> },
  { name: "Hasura", icon: <SiHasura /> },
  { name: "Graphql", icon: <SiApollographql /> },
  { name: "Chakra ui", icon: <SiChakraui /> },
  { name: "Material ui", icon: <SiMaterialui /> },
  { name: "Scss", icon: <SiSass /> },
  { name: "ThreeJS", icon: <SiThreedotjs /> },
  { name: "RestApi", icon: <TbApi /> },
  { name: "React testing library", icon: <SiTestinglibrary /> },
];

const linestyle = {
  height: 5,
  width: "100%",
};
const Tile = ({ item, index }) => {
  const [mobile] = useMediaQuery("(min-width: 800px)");

  return (
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
        <CardBody paddingTop={0}>
          {/* <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        borderRadius="lg"
      /> */}
          <Stack
            // mt="6"
            spacing="3"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Heading size="md">{item.title}</Heading>
            <Text textAlign={"center"}>{item.description}</Text>
            {!mobile && (
              <Text textAlign={"center"} fontSize={"xs"} textColor={"teal.100"}>
                {item.technology}
              </Text>
            )}
          </Stack>
        </CardBody>
        {/* <Divider /> */}
        {mobile && (
          <CardFooter>
            <Box
              textAlign={"center"}
              textColor={"teal.100"}
              display={"flex"}
              fontSize={"md"}
              gap={2}
              position={"absolute"}
              bottom={4}
            >
              {/* {item.technology} */}
              {icons
                .filter((obj) => item.technology.includes(obj.name))
                .map((obj, index) => {
                  return (
                    <Box
                      key={index}
                      _hover={{ color: "yellow.200" }}
                      className="tooltip"
                    >
                      {obj.icon}
                      <Text className="tooltiptext">{obj.name}</Text>
                    </Box>
                  );
                })}
            </Box>
          </CardFooter>
        )}
      </Link>
    </Card>
  );
};
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

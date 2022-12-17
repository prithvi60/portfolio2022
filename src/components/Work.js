import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Highlight,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Lottie from "lottie-react";
import lineAnimation from "../assets/divider.json";
import Profile from "../assets/portfolio.json";
import { FaExternalLinkAlt } from "react-icons/fa";
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
    <Link href={item.company} isExternal>
      <CardHeader justifyContent={"flex-end"} display={"flex"}>
        <FaExternalLinkAlt />
      </CardHeader>
      <CardBody>
        <Image
          src={item.image}
          // boxSize={{
          //   base: "5%",
          //   md: "5%",
          //   lg: "20%",
          // }}
          boxSize={"20%"}
          width={"100%"}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack
          mt="6"
          spacing="3"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Heading size="md">{item.role}</Heading>
          <Text textAlign={"center"}>{item.description}</Text>
          <Text textAlign={"center"} fontSize={"xs"}  textColor={"teal.100"}>
            {item.technology}
          </Text>
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
export const Work = forwardRef((_, ref) => {
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
          <Heading mb={8}>Work Experience:</Heading>
        </Box>
        <Highlight
          query={["design"]}
          styles={{ px: "1", py: "1", color: "green.500", fontWeight: "bold" }}
        >
          I have had the opportunity to work in wide ranged tools as a frontend
          developer in small to big firms. My experience comes from:
        </Highlight>
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
        {Profile.work.map((item, index) => (
          <Tile item={item} key={index} />
        ))}
      </Box>

      <Box
        position={"absolute"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"row"}
        bottom={8}
        // width={"100%"}
      >
        <Lottie animationData={lineAnimation} style={linestyle} />
      </Box>
    </Box>
  );
});

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
      <Image
        src={item.image}
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
        <Text textAlign={"center"} fontSize={"x-small"}>
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
  </Card>
);
export const Work = forwardRef((_, ref) => {
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
          <Heading mb={2}>Work Experience:</Heading>
        </Box>
        <Highlight
          query={["design"]}
          styles={{ px: "1", py: "1", color: "teal.100", fontWeight: "bold" }}
        >
          I have had the opportunity to work in wide ranged tools as a frontend
          developer in small to big firms. I am excited to continue growing and
          refining my skills as a front end developer, and am open to new
          opportunities to collaborate and create innovative, dynamic websites.
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
        bottom={0}
        width={"100%"}
      >
        <Lottie animationData={lineAnimation} style={linestyle} />
      </Box>
    </Box>
  );
});

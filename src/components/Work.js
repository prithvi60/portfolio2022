import {
  Box,
  Card,
  CardBody,
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

const linestyle = {
  height: 5,
  width: "100%",
};
const Tile = () => (
  <Card
    maxW="sm"
    color={"#d2bdf6"}
    bg={"#2f3747"}
    _dark={{
      bg: "#2f3747",
    }}
  >
    <CardBody>
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
        <Heading size="md">Front end developer</Heading>
        <Text textAlign={"center"}>
          Worked in a boutique agency invloved in development of planner app for
          a unicorn media company
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
          In my current position, I am responsible for the design and
          implementation of the front end of a large e-commerce website, and
          have successfully contributed to an increase in user engagement and
          conversions. I am excited to continue growing and refining my skills
          as a front end developer, and am open to new opportunities to
          collaborate and create innovative, dynamic websites. Thank you for
          considering me for your project!
        </Highlight>
      </Box>
      <Box display={"flex"} gap={4}>
        {[...Array(3)].map(() => (
          <Tile />
        ))}
      </Box>

      <Box>Projects</Box>
      <Link>Github</Link>
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

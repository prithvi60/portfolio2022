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
const Tile = () => (
  <Card maxW="sm" color={"#d2bdf6"}>
    <CardBody>
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">Front end developer</Heading>
        <Text>
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
export const Project = forwardRef((_, ref) => {
  return (
    <Box
      p={4}
      style={{ height: "100%" }}
      color={"#d2bdf6"}
      ref={ref}
      bg={"#1b202b"}
      borderBottom={"2px"}
      borderColor={"#d2bdf6"}
    >
      <Box mb={4}>
        <Heading mb={2}>Work:</Heading>
        <Highlight
          query={["Prithvi", "HTML, CSS, and JavaScript"]}
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

      {/* <Box>
        <Heading mb={2}>Game / meme:</Heading>
      </Box> */}
    </Box>
  );
});

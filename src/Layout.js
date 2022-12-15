import { Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Header from "./components/Header";
import { Project } from "./components/Project";
import AnimatedLanding from "./components/AnimatedLanding";
import { Work } from "./components/Work";
import { Education } from "./components/Education";
import { Skill } from "./components/Skill";

export default function Layout() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box bg={"blackAlpha.900"} height={"100vh"}>
      <Header />
      <AnimatedLanding handleClick={handleClick} />
      <About ref={ref} />
      <Skill />
      <Work />
      <Project />
      <Education />
      <Contact />
    </Box>
  );
}

import { Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import {About} from "./components/About";
import Header from "./components/Header";
import LandingPage from "./components/landingPage";

export default function Layout() {
    const ref = useRef(null);

    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };
  return (
    <Box bg={"blackAlpha.900"} height={"100vh"}>
      <Header />
      <LandingPage handleClick={handleClick}/>
      <About ref={ref}/>
    </Box>
  );
}

import { Box } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
// import Header from "./components/Header";
import { Project } from "./components/Project";
import AnimatedLanding from "./components/AnimatedLanding";
import { Work } from "./components/Work";
import { Education } from "./components/Education";
import { Skill } from "./components/Skill";

export default function Layout() {
  const aboutref = useRef();
  const skillref = useRef(null);
  const workref = useRef(null);
  const projectref = useRef(null);
  const educationref = useRef(null);
  const contactref = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [sec, setSec] = useState(null);
  console.log("main", sec);
  const handleClick = (section) => {
    // setSec(section);
    switch (section) {
      case "about":
        aboutref.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skill":
        skillref.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "work":
        workref.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "project":
        projectref.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "education":
        educationref.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactref.current?.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        aboutref.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  // React.useEffect(() => {
  //   console.log("Scroll",sec)
  //   switch (sec) {
  //     case "about":
  //       aboutref.current?.scrollIntoView({ behavior: "smooth" });
  //       break;
  //     case "skill":
  //       skillref.current?.scrollIntoView({ behavior: "smooth" });
  //       break;
  //     case "work":
  //       workref.current?.scrollIntoView({ behavior: "smooth" });
  //       break;
  //     case "project":
  //       projectref.current?.scrollIntoView({ behavior: "smooth" });
  //       break;
  //     case "education":
  //       educationref.current?.scrollIntoView({ behavior: "smooth" });
  //       break;
  //     case "contact":
  //       contactref.current?.scrollIntoView({ behavior: "smooth" });
  //       break;

  //     default:
  //       aboutref.current?.scrollIntoView({ behavior: "smooth" });
  //       break;
  //   }
  // }, [sec]);

  return (
    <Box bg={"blackAlpha.900"} height={"100vh"} position={"relative"}>
      {/* <Header handleClick={handleClick} setSec={setSec}  aboutref={aboutref} /> */}
      <AnimatedLanding handleClick={handleClick} />
      <About ref={aboutref} />
      <Skill ref={skillref} />
      <Work ref={workref} />
      <Project ref={projectref} />
      <Education ref={educationref} />
      <Contact ref={contactref} />
    </Box>
  );
}

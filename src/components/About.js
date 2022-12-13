import { Box } from "@chakra-ui/react";
import React, { forwardRef } from "react";
export const About = forwardRef((_, ref) => {
  return (
    <Box p={2} style={{ height: "100%" }} color={"pink.200"} ref={ref}>
      Hello! My name is Prithvi and I am a front end developer with a passion
      for creating visually stunning and user-friendly websites. With several
      years of experience in the field, I have honed my skills in HTML, CSS, and
      JavaScript, and have a strong understanding of responsive design and
      mobile optimization. I am constantly seeking to learn and stay up-to-date
      with the latest web development technologies and trends, and love finding
      creative solutions to complex problems. In my previous projects, I have
      worked with a wide range of clients and industries, and have enjoyed the
      challenge of bringing their unique vision to life through engaging,
      interactive web experiences. In my current position, I am responsible for
      the design and implementation of the front end of a large e-commerce
      website, and have successfully contributed to an increase in user
      engagement and conversions. I am excited to continue growing and refining
      my skills as a front end developer, and am open to new opportunities to
      collaborate and create innovative, dynamic websites. Thank you for
      considering me for your project!
    </Box>
  );
});

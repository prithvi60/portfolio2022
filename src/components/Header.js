import React from "react";
import { motion } from "framer-motion";
import { Box, Stack } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header style={{ height: "100%" }}>
      <Stack
        display={"flex"}
        justifyContent={"flex-end"}
        width={"100%"}
        flexDirection={"row"}
        p={4}
      >
        <Box>
          <FaGithub fill="#d2bdf6" />
          <FaLinkedinIn fill="#d2bdf6" />
          <FaWhatsapp fill="#d2bdf6" />
        </Box>
      </Stack>
      <Box className="ani" display={"flex"} justifyContent={"center"} p={4}>
        <Stack>
          <motion.svg
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              fill={"none"}
              d="M-50,100 l-1,146 q29,-98 50,2 c34,17 41,-49 22,-39 c-3,2 -28,43 25,40 q0,3 17,-34 q-27,69 40,0 q-12,92 -81,112"
              variants={pathVariants}
            />
          </motion.svg>
        </Stack>
      </Box>
    </header>
  );
};

export default Header;

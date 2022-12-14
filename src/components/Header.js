import React from "react";
import { motion } from "framer-motion";
import { Box, IconButton, Stack, useDisclosure } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Modal from "./Drawer";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header style={{ height: "100%" }}>
      <Stack
        display={"flex"}
        justifyContent={"flex-end"}
        width={"100%"}
        flexDirection={"row"}
        p={4}
      >
        <Box zIndex={"100"} display={"flex"} flexDirection={"column"} gap={4}>
          <IconButton
            background={"purple.200"}
            _hover={{
              background: "purple.300",
            }}
            onClick={onOpen}
            aria-label="menu"
            size={"sm"}
            icon={<AiOutlineMenu />}
          />

          <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          {/* <FaGithub fill="#d2bdf6" />
          <FaLinkedinIn fill="#d2bdf6" />
          <FaWhatsapp fill="#d2bdf6" /> */}
        </Box>
      </Stack>
      {/* <Box
        display={"flex"}
        justifyContent={"flex-end"}
        width={"100%"}
        flexDirection={"row"}
        color={"#d2bdf6"}
        position={"absolute"}
        top={0}
        right={"5%"}
        p={2}
      >
        <Box zIndex={"100"} textAlign={"center"}>
          <Text fontWeight={"bold"}> About me</Text>
          <Text fontWeight={"bold"}> Work</Text>
          <Text fontWeight={"bold"}> Skill</Text>
          <Text fontWeight={"bold"}> Contact</Text>
        </Box>
      </Box> */}
      <Box className="ani" display={"flex"} justifyContent={"center"} p={4}>
        <Stack zIndex={"100"}>
          <motion.svg
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              fill={"none"}
              d="M-50,-30 l-1,146 q29,-98 50,2 c34,17 41,-49 22,-39 c-3,2 -28,43 25,40 q0,3 17,-34 q-27,69 40,0 q-12,92 -81,112"
              strokeWidth="6"
              variants={pathVariants}
            />
          </motion.svg>
        </Stack>
      </Box>
    </header>
  );
};

export default Header;

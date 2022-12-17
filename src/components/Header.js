import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  //  IconButton,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
// import { AiOutlineMenu } from "react-icons/ai";
// import Modal from "./Drawer";
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

const Header = ({ handleClick, setSec, aboutref }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [open, setOpen] = React.useState(false);
  const [mobile] = useMediaQuery("(min-width: 800px)");

  return (
    <header style={{ height: "100%" }}>
      <Stack
        display={"flex"}
        justifyContent={"flex-end"}
        width={"100%"}
        flexDirection={"row"}
        p={4}
      >
        {/* <Box zIndex={"100"} display={"flex"} flexDirection={"column"} gap={4} position={"fixed"}>
          <IconButton
            background={"purple.200"}
            _hover={{
              background: "purple.300",
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
            aria-label="menu"
            size={"sm"}
            icon={<AiOutlineMenu />}
          />

          <Modal
            isOpen={open}
            // onOpen={onOpen}
            onClose={setOpen}
            handleClick={handleClick}
            setSec={setSec}
            aboutref={aboutref}
          />
          <FaGithub fill="#d2bdf6" />
          <FaLinkedinIn fill="#d2bdf6" />
          <FaWhatsapp fill="#d2bdf6" /> 
        </Box> */}
      </Stack>

      <Box
        className="ani"
        display={"flex"}
        justifyContent={"center"}
        p={4}
        mt={mobile ? 12 : 20}
      >
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

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Text,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Modal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={"gray.800"}>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader color={"white"}>Quick access</DrawerHeader>

          <DrawerBody>
            <Box
              color={"#d2bdf6"}
              display={"flex"}
              flexDirection={"column"}
              gap={4}
            >
              <Text fontWeight={"bold"}> About me</Text>
              <Text fontWeight={"bold"}> Skill</Text>
              <Text fontWeight={"bold"}> Work Experience</Text>
              <Text fontWeight={"bold"}> Projects</Text>
              <Text fontWeight={"bold"}> Education</Text>
              <Text fontWeight={"bold"}> Contact</Text>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Box
              display={"flex"}
              gap={6}
              width={"100%"}
              justifyContent={"center"}
            >
              <FaGithub fill="#d2bdf6" />
              <FaLinkedinIn fill="#d2bdf6" />
              <FaWhatsapp fill="#d2bdf6" />
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

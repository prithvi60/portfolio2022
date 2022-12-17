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
  Link,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
// import ReactWhatsapp from "react-whatsapp";
export default function Modal({
  isOpen,
  onClose,
  handleClick,
  setSec,
  aboutref,
}) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => onClose(false)}
        finalFocusRef={aboutref}
        returnFocus={false}
      >
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
              <Text
                fontWeight={"bold"}
                onClick={() => {
                  handleClick("about");
                  // onClose();
                }}
              >
                {" "}
                About me
              </Text>
              <Text
                fontWeight={"bold"}
                onClick={() => {
                  handleClick("skill");
                  // setSec("skill");
                  // onClose();
                }}
              >
                {" "}
                Skill
              </Text>
              <Text
                fontWeight={"bold"}
                onClick={() => {
                  handleClick("work");
                  onClose();
                }}
              >
                {" "}
                Work Experience
              </Text>
              <Text
                fontWeight={"bold"}
                onClick={() => {
                  handleClick("project");
                  onClose();
                }}
              >
                {" "}
                Projects
              </Text>
              <Text
                fontWeight={"bold"}
                onClick={() => {
                  handleClick("education");
                  onClose();
                }}
              >
                {" "}
                Education
              </Text>
              <Text
                fontWeight={"bold"}
                onClick={() => {
                  handleClick("contact");
                  onClose();
                }}
              >
                {" "}
                Contact
              </Text>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Box
              display={"flex"}
              gap={6}
              width={"100%"}
              justifyContent={"center"}
            >
              <Link href={"https://github.com/prithvi60"} isExternal>
                <FaGithub fill="#d2bdf6" />
              </Link>
              <Link href={"https://www.linkedin.com/in/prithvi-n/"} isExternal>
                <FaLinkedinIn fill="#d2bdf6" />
              </Link>
              <Link
                href={`https://api.whatsapp.com/send/?phone=7358023088&text=Hey Prithvi&type=phone_number&app_absent=0`}
                isExternal
              >
                <FaWhatsapp fill="#d2bdf6" />
              </Link>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  useColorMode,
  useDisclosure,
  Switch,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const nasir = "< Nasir />";

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display="flex" alignItems="center" justifyContent="flex-start" gap={6} pos="sticky" top={0}>
      <Button colorScheme="cyan" onClick={onOpen}>
        <FaBars />
      </Button>
      <Heading size="sm">{nasir}</Heading>
      <Drawer placement={"left"} onClose={onClose} size="xs" isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody display="flex" gap={5} flexDir="column">
            <HashLink to="#home" onClick={onClose}>
              Home
            </HashLink>
            <HashLink to="#about" onClick={onClose}>
              About Me
            </HashLink>
            <HashLink to="#skills" onClick={onClose}>
              Skills
            </HashLink>
            <HashLink to="#project" onClick={onClose}>
              Project
            </HashLink>
            <HashLink to="#contect" onClick={onClose}>
              Contect
            </HashLink>
            <HashLink to="#resume" onClick={onClose}>
              Resume
            </HashLink>
            <Button
            w={70}
              onClick={toggleColorMode}
            >
              {colorMode == "dark" ? "Dark" : "Light"}
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SideBar;

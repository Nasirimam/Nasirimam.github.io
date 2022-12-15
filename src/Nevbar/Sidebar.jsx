import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const { colorMode, toggleColorMode } = useColorMode();

  // useEffect(()=>{
  //   toggleColorMode()
  // },[])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap={6}
      pos="sticky"
      top={0}
    >
      <Button colorScheme="none" onClick={onOpen} color="whiteAlpha.900">
        <FaBars />
      </Button>
      <Drawer
        placement={"left"}
        onClose={onClose}
        size="xs"
        colorScheme="blackAlpha"
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="2px">
            <span style={{ color: "red" }}>iam</span>Nasir
          </DrawerHeader>
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
              Contect Me
            </HashLink>
            <HashLink to="#resume" onClick={onClose}>
              Resume
            </HashLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SideBar;

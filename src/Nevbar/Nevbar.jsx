import {
  Stack,
  HStack,
  VStack,
  Box,
  Grid,
  GridItem,
  Spacer,
  useColorMode,
  Button,
  Switch,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SideBar from "./Sidebar";

const Navbar = () => {
  const nasir = "< Nasir />";

  const [size, setSize] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(size);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize(true);
      } else {
        setSize(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!size) {
    return (
      <Grid
        templateColumns="repeat(9, 1fr)"
        fontFamily="lorem"
        fontSize={{ base: "7px", md: "14px", lg: "18px" }}
        gap={4}
        fontWeight="semibold"
        border="0px solid white"
        p={5}
        pos="sticky"
        top={0}
        zIndex={10}
        bgColor={colorMode == "light" ? "white" : "gray.800"}
      >
        <GridItem>{nasir}</GridItem>
        <Spacer />
        <GridItem>
          <HashLink smooth to="#home">
            Home
          </HashLink>
        </GridItem>
        <GridItem>
          <HashLink smooth to="#about">
            About Me
          </HashLink>
        </GridItem>
        <GridItem>
          <HashLink smooth to="#skills">
            Skills
          </HashLink>
        </GridItem>
        <GridItem>
          <HashLink smooth to="#project">
            Project
          </HashLink>
        </GridItem>
        <GridItem>
          <HashLink smooth to="#contect">
            Contect
          </HashLink>
        </GridItem>
        <GridItem>
          <HashLink smooth to="#resume">
            Resume
          </HashLink>
        </GridItem>
        <GridItem border="0px solid red">
          <Button
            size={{ base: "7px", md: "xs", lg: "sm" }}
            onClick={toggleColorMode}
          >{colorMode == "dark" ? "Dark" : "Light"}</Button>
        </GridItem>
      </Grid>
    );
  } else {
    return <SideBar />;
  }
};

export default Navbar;

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
  const [size, setSize] = useState(window.innerWidth);

  // console.log(size);
  
  if (size>800) {
    return (
      <Grid
        templateColumns="repeat(8, 1fr)"
        fontFamily="lorem"
        fontSize={{ base: "7px", md: "14px", lg: "18px" }}
        gap={4}
        fontWeight="semibold"
        p={5}
        pos="sticky"
        top={0}
        border="0px solid red"
        bgColor="blackAlpha.800"
        zIndex="overlay"
      >
        <GridItem>
          <span style={{ color: "red" }}>iam</span>Nasir
        </GridItem>
        <Spacer />
        <GridItem color="white">
          <HashLink smooth to="#home">
            Home
          </HashLink>
        </GridItem>
        <GridItem color="white">
          <HashLink smooth to="#about">
            About Me
          </HashLink>
        </GridItem>
        <GridItem color="white">
          <HashLink smooth to="#skills">
            Skills
          </HashLink>
        </GridItem>
        <GridItem color="white">
          <HashLink smooth to="#project">
            Project
          </HashLink>
        </GridItem>
        <GridItem color="white">
          <HashLink smooth to="#contect">
            Contect Me
          </HashLink>
        </GridItem>
        <GridItem color="white">
          <HashLink smooth to="#resume">
            Resume
          </HashLink>
        </GridItem>
      </Grid>
    );
  } else {
    return <SideBar />;
  }
};

export default Navbar;

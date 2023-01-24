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
import { HashLink, NavHashLink } from "react-router-hash-link";
import SideBar from "./Sidebar";

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);

  // console.log(size);

  if (size > 800) {
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
        <GridItem color={"whiteAlpha.900"}>
          <span style={{ color: "red" }}>iam</span>Nasir
        </GridItem>
        <Spacer />
        <GridItem color="red">
          <NavHashLink smooth to="#home">
            Home
          </NavHashLink>
        </GridItem>
        <GridItem color="red">
          <NavHashLink smooth to="#about">
            About Me
          </NavHashLink>
        </GridItem>
        <GridItem color="red">
          <NavHashLink smooth to="#skills">
            Skills
          </NavHashLink>
        </GridItem>
        <GridItem color="red">
          <NavHashLink smooth to="#project">
            Project
          </NavHashLink>
        </GridItem>
        <GridItem color="red">
          <NavHashLink smooth to="#contect">
            Contect Me
          </NavHashLink>
        </GridItem>
        <GridItem color="red">
          <NavHashLink smooth to="#resume">
            Resume
          </NavHashLink>
        </GridItem>
      </Grid>
    );
  } else {
    return <SideBar />;
  }
};

export default Navbar;

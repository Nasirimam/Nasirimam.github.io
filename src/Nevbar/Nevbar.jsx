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

  const [size, setSize] = useState(false);

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
        templateColumns="repeat(8, 1fr)"
        fontFamily="lorem"
        fontSize={{ base: "7px", md: "14px", lg: "18px" }}
        gap={4}
        fontWeight="semibold"
        p={5}
        pos="sticky"
        top={0}
        border="0px solid red"
      >
        <GridItem><span style={{color:'red'}}>iam</span>Nasir</GridItem>
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
      </Grid>
    );
  } else {
    return <SideBar />;
  }
};

export default Navbar;

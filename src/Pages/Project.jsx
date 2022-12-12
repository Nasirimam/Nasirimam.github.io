import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Square,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Myimages from "../Images/GoodFood.webp";
import codecov from "../Images/codecov.webp";
import { FaGit, FaGithub, FaPlay } from "react-icons/fa";

const Project = () => {
  // console.log(Myimages);
  const projectItem = [
    {
      image: Myimages,
      name: " Good Food Home Delevery",
      dis: " This is a Web Page of a Resuturent. It is Used to order Food online Easly",
      tools: "React.js, JavaScript, Chakra UI, json-server",
      link: "https://lovely-brioche-dc2cb9.netlify.app/",
      github:
        "https://github.com/Nasirimam/daring-ship-8304/tree/main/my-pro/src",
      demovideo:
        "https://drive.google.com/file/d/1FdV3KC-OiOoWkiydp94HE66A_zbOnJZ2/view?usp=share_link",
    },
    {
      image: codecov,
      name: "Code Cov Online Courses",
      dis: "This is a online course selling app. Which help the user to buy any course easly and Learn.",
      tools: "JavaScript, HTML, CSS",
      link: "https://dainty-alfajores-329d03.netlify.app/",
      github: "https://github.com/Nasirimam/resilient-gate-1588",
      demovideo:
        "https://drive.google.com/file/d/12rk2dFJLtHnt5YOXS7P_g_vPIb6qzP0Q/view?usp=share_link",
    },
  ];

  const handleGitClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDemoClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box id="project" mt={150} mb={100} border="0px solid red">
      <Heading color="red" id="skills" pb={10}>
        Projects
      </Heading>
      <Flex
        w="85%"
        margin="auto"
        border="0px solid white"
        gap={10}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        {projectItem.map((elem) => (
          <Box
            key={elem.name}
            bgColor="whiteAlpha.900"
            p={{
              base: 3,
              sm: 4,
              md: 5,
              lg: 6,
              xl: 6,
            }}
            borderRadius={10}
          >
            <a href={elem.link}>
              <Center
                border="0px solid red"
                direction="column"
                alignItems="center"
                justifyContent="center"
                bgColor="whiteAlpha.900"
                p={3}
                borderRadius={15}
              >
                <Image src={elem.image} />
              </Center>
            </a>
            <Box
              border="0px solid green"
              fontSize={{ base: 12, sm: 20, md: 15, lg: 20, xl: 22 }}
              color="blue.500"
              display="flex"
              flexDir="column"
              padding={1}
            >
              <Center borderBottom="2px solid red" p={1} color="red">
                Name
              </Center>
              <Center p={1} mb={{ base: 3, sm: 4, md: 5, lg: 5, xl: 5 }}>
                {elem.name}
              </Center>
              <Center borderBottom="2px solid red" p={1} color="red">
                Discription
              </Center>
              <Center p={1} mb={{ base: 3, sm: 4, md: 5, lg: 5, xl: 5 }}>
                {elem.dis}
              </Center>
              <Center borderBottom="2px solid red" p={1} color="red">
                Tools
              </Center>
              <Center p={1} mb={{ base: 3, sm: 4, md: 5, lg: 5, xl: 5 }}>
                {elem.tools}
              </Center>
              <Center gap={5}>
                <Button
                  colorScheme="cyan"
                  onClick={() => handleGitClick(elem.github)}
                  leftIcon={<FaGithub />}
                >
                  GitHub
                </Button>
                <Button
                  colorScheme="cyan"
                  onClick={() => handleDemoClick(elem.demovideo)}
                  leftIcon={<FaPlay />}
                >
                  Demo Video
                </Button>
              </Center>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Project;

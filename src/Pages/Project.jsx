import { Box, Center, Flex, Heading, Image, Square } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Myimages from "../Images/GoodFood.webp";
import codecov from "../Images/codecov.webp";

const Project = () => {
  // console.log(Myimages);
  const projectItem = [
    {
      image: Myimages,
      name: "Good Food Home Delevery",
      dis: "",
      link: "https://lovely-brioche-dc2cb9.netlify.app/",
    },
    {
      image: codecov,
      name: "Code Cov Online Courses",
      dis: "",
      link: "https://dainty-alfajores-329d03.netlify.app/",
    },
  ];

  return (
    <Box id="project" mt={150} mb={100} border="0px solid red">
      <Heading color="red" id="skills" pb={10}>Projects</Heading>
      <Flex w="80%" margin="auto" border="0px solid white" gap={10}>
        {projectItem.map((elem) => (
          <Box key={elem.name}>
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
              border="2px solid green"
              fontSize={{ base: 6, sm: 10, md: 15, lg: 20, xl: 22 }}
              color="blue.500"
              display="flex"
              flexDir="column"
              alignItems="flex-start"
            >
              <Square p={1}>Name : {elem.name}</Square>
              <Square p={1}>Discription : {elem.dis}</Square>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Project;

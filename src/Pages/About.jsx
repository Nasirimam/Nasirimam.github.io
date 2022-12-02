import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Square,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" border="0px solid red" textAlign="center">
      <Heading color="red" pb={30}>About</Heading>
      <Grid
        border="0px solid"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={10}
        w={{ base: "100%", sm: "90%", md: "80%" }}
        margin="auto"
        padding={8}
        borderRadius={{ base: 20, lg: 40 }}
      >
        <GridItem
          border="0px solid blue"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w={{ base: "60%", sm: "70%", md: "100%" }}
          margin="auto"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/107552859?v=4"
            w="100%"
            borderRadius="100%"
          />
        </GridItem>
        <GridItem
          border="0px solid blue"
          display="flex"
          justifyContent="center"
        >
          <Center
            fontSize={{
              base: "14px",
              sm: "20px",
              md: "16px",
              lg: "22px",
              xl: "30px",
            }}
            border="0px solid red"
            textAlign="justify"
            color="blue.200"
          >
            Hi I am Nasir imam Talented MERN stack developer familiar with a
            wide range of programming utilities and languages. Knowledgeable of
            backend and frontend development requirements. Able to handle any
            part of the process with ease.
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;

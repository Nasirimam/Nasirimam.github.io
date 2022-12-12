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
      <Heading color="red" pb={30}>
        About
      </Heading>
      <Grid
        border="0px solid"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
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
        >
          <Center
            fontSize={{
              base: "12px",
              sm: "15px",
              md: "16px",
              lg: "18px",
              xl: "22px",
            }}
            border="0px solid red"
            textAlign="justify"
            color="blue.200"
          >
            A Full-Stack web Developer. Always looking to establish a long-term
            career in a company where I may utilize my skill set and knowledge
            to be an effective software developer and inspiration to those
            around me. Enjoy creative problem-solving and exposure to multiple
            projects, and I would excel in the collaborative environment in
            which your company prides itself.
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;

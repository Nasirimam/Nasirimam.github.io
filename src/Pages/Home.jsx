import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Square,
  Image,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box border="0px solid red" id="home">
      <Heading color="red" pb={50}>Home</Heading>
      <Flex
        border="0px solid"
        w={{ base: "100%", sm: "90%", md: "80%" }}
        margin="auto"
        padding={8}
        borderRadius={{ base: 20, lg: 40 }}
      >
        <Container
          display="flex"
          flexDir="column"
          gap={3}
          border="0px solid green"
          width="75%"
        >
          <Heading
            size={{
              base: "sm",
              sm: "md",
              md: "lg",
              lg: "xl",
              xl: "2xl",
              "2xl": "4xl",
            }}
            border="0px solid red"
            color="red"
          >
            Hello.
          </Heading>
          <Square
            fontSize={{
              base: "11px",
              sm: "18px",
              md: "25px",
              lg: "30px",
              xl: "35px",
            }}
            border="0px solid red"
            color="blue.500"
          >
            I am full Stack Developer.
          </Square>
          <Square
            fontSize={{
              base: "7px",
              sm: "9px",
              md: "sm",
              lg: "lg",
              xl: "lg",
            }}
            border="0px solid red"
            textAlign="justify"
            color="blue.200"
          >
            I am Learning from Masai School Banglore. I have a passion to create
            useful projects and systems which can contribute in everyone's
            wellbeing. I go to full extent in execution.
          </Square>
        </Container>
        <Box
          border="0px solid blue"
          display="flex"
          justifyContent="center"
          w="25%"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/107552859?v=4"
            w="100%"
            borderRadius="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;

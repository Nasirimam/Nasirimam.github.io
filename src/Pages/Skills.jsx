import {
  Box,
  SimpleGrid,
  Image,
  Center,
  Flex,
  Heading,
} from "@chakra-ui/react";

const Skills = () => {
  const SkillItem = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      name: "javaScript",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      name: "React.js",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
      name: "HTML",
    },
    {
      image:
        "https://www.kindpng.com/picc/m/23-237467_transparent-css3-logo-png-html5-css3-png-download.png",
      name: "CSS",
    },
    {
      image:
        "https://www.nicepng.com/png/detail/178-1787594_redux-redux-logo-svg.png",
      name: "Redux",
    },
    {
      image:
        "https://www.pngarts.com/files/8/Github-Logo-Transparent-Background-PNG.png",
      name: "GitHub",
    },
    {
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      name: "Git",
    },
    {
      image: "https://miro.medium.com/max/1400/1*El82DHzQwuFxMIXzBzKjUA.png",
      name: "Node.js",
    },
    {
      image: "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png",
      name: "Mongo DB",
    },
  ];

  return (
    <>
      <Heading color="red" id="skills">
        Skills
      </Heading>
      <SimpleGrid
        w="80%"
        margin="auto"
        columns={{
          base: 3,
          sm: 3,
          md: 3,
          lg: 4,
          xl: 4,
        }}
        spacing={10}
        mt={10}
      >
        {SkillItem.map((elem) => (
          <Center
            bgColor="whiteAlpha.900"
            p={3}
            borderRadius={10}
            display="flex"
            flexDir="column"
            key={elem.name}
            justifyContent="center"
            alignItems="center"
            transition="0.5s"
            cursor="pointer"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;",
            }}
          >
            <Image src={elem.image} alt={elem.name} w="100%" />
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Skills;

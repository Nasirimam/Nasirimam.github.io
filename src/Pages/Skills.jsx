import {
  Box,
  SimpleGrid,
  Image,
  Center,
  Flex,
  Heading,
} from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

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
    {
      image:
        "https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png",
      name: "Type-Script",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
      name: "Vs.Code",
    },
    {
      image:
        "https://s3.eu-west-1.amazonaws.com/niice-cms/2021/03/02/603ec20dc80e6codesandbox-1.png",
      name: "Vs.Code",
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
      <Heading color="red" id="skills" mt={10}>
        Github Calender
      </Heading>
      <Flex color={"whiteAlpha.900"} justify={"center"} mt={5}>
        <GitHubCalendar username="Nasirimam" />
      </Flex>
      <Heading color="red" id="skills" mt={10}>
        Github Stats
      </Heading>
      <Flex
        justify={"center"}
        alignItems={"center"}
        w="80%"
        margin={"auto"}
        gap={5}
        mt={5}
      >
        <Box flex={1}>
          <Image
            src="https://github-readme-stats.vercel.app/api?username=Nasirimam&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=radical"
            alt="m-sehrawat"
            // w={"100%"}
            // h={"100%"}
          />
        </Box>
        <Box flex={1}>
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nasirimam&layout=compact&exclude_repo=Lybrate-Website-Clone-Version-2.0,Lybrate-Website-Clone,Adidas-Clone&hide=Shell&border_radius=0&theme=radical"
            alt="m-sehrawat"
            w={"76%"}
            // h={"100%"}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Skills;

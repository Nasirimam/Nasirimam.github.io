import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import myResume from "../Images/Nasir_Imam.webp";
import resumePdf from "../Images/Nasir_Imam_Resume.pdf";

const Resume = () => {
  const downloadResume = () => {
    window.open(resumePdf, "_blank", "noopener,noreferrer");
  };

  return (
    <Box>
      <Heading color="red" id="resume" pb={10}>
        Resume
      </Heading>
      <Box
        display="flex"
        w="60%"
        h={{
          base: "300px",
          sm: "400px",
          md: "500px",
          lg: "600px",
          xl: "800px",
          "2xl": "800px",
        }}
        margin="auto"
        flexDir="column"
        mb={10}
      >
        <Image src={myResume} width="100%" h="100%" />
      </Box>
      <Button
        mb={10}
        colorScheme="cyan"
        onClick={downloadResume}
        rightIcon={<FaArrowAltCircleDown />}
      >
        Download
      </Button>
    </Box>
  );
};

export default Resume;

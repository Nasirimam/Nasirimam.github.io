import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import resumePdf from "../Images/Nasir_Imam_Resume.pdf";

const Resume = () => {
  const downloadResume = () => {
    window.open(
      resumePdf,
      "_blank",
      "noopener,noreferrer",
      "download=resumePdf.html"
    );
  };

  return (
    <Box>
      <Heading color="red" id="resume" pb={10}>
        Resume
      </Heading>
      <a href={resumePdf} target="_blank" rel="noopener noreferrer" download>
        <Button
          mb={10}
          colorScheme="cyan"
          onClick={downloadResume}
          rightIcon={<FaArrowAltCircleDown />}
        >
          Download
        </Button>
      </a>
    </Box>
  );
};

export default Resume;

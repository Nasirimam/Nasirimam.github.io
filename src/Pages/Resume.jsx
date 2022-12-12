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

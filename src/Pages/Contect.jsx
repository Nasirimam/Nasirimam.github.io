import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Input,
  Text,
  Button,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaRedoAlt,
  FaTheRedYeti,
} from "react-icons/fa";

const Contect = () => {
  const intEmail = {
    from_name: "",
    to_name: "Nasir Imam",
    email_id: "",
    message: "",
  };

  const [form, setForm] = useState(intEmail);
  const toast = useToast();
  const [isLoading, setLoding] = useState(false);

  //   console.log(isLoading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = () => {
    setLoding(true);
    emailjs
      .send("service_moptwb7", "template_wyij5nl", form, "KnDsc3OxyK9aQAhCZ")
      .then(
        (result) => (
          setForm(intEmail),
          toast({
            title: "Email Send Successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
          }),
          setLoding(false)
        ),
        (error) => (
          toast({
            title: "Sorry Something Went Wrong",
            status: "error",
            duration: 9000,
            isClosable: true,
          }),
          setLoding(false)
        )
      );
  };

  const profileBtn = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/nasir-imam-1809ab246/",
      logo: <FaLinkedin />,
    },
    {
      name: "GitHub",
      link: "https://github.com/Nasirimam",
      logo: <FaGithub />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/nasirimam6?igshid=MWM2YjBjM2Q=",
      logo: <FaInstagram />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/nasir.raj.1690/",
      logo: <FaFacebook />,
    },
  ];

  const handleProfileLinkBtn = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Heading color="red" id="contect" pb={10}>
        Contect Me
      </Heading>
      <SimpleGrid
        width="80%"
        margin="auto"
        spacing={10}
        columns={{
          base: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 2,
          "2xl": 2,
        }}
        marginBottom={20}
      >
        <GridItem
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          gap={7}
        >
          {profileBtn.map((elem) => (
            <Button
              leftIcon={elem.logo}
              onClick={() => handleProfileLinkBtn(elem.link)}
              colorScheme="cyan"
              width="120px"
              key={elem.name}
            >
              {elem.name}
            </Button>
          ))}
        </GridItem>
        <GridItem>
          <Heading
            size={{
              base: "lg",
              sm: "lg",
              md: "md",
              lg: "lg",
              xl: "xl",
              "2xl": "2xl",
            }}
            color="red"
            mb={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={4}
            borderBottom="2px solid red"
            pb={2}
          >
            Write Your Message <FaEnvelope />
          </Heading>
          <Text mb={2} color="blue.600">
            Your Name
          </Text>
          <Input
            htmlSize={40}
            width={{
              base: "250px",
              sm: "400px",
              md: "300px",
              lg: "400px",
              xl: "450px",
              "2xl": "450px",
            }}
            type="text"
            mb={6}
            color="blackAlpha.900"
            bgColor="whiteAlpha.900"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
          />
          <Text mb={2} color="blue.600">
            Your Email
          </Text>
          <Input
            htmlSize={40}
            width={{
              base: "250px",
              sm: "400px",
              md: "300px",
              lg: "400px",
              xl: "450px",
              "2xl": "450px",
            }}
            type="email"
            mb={6}
            color="blackAlpha.900"
            bgColor="whiteAlpha.900"
            name="email_id"
            value={form.email_id}
            onChange={handleChange}
          />
          <Text mb={2} color="blue.600">
            Your Message
          </Text>
          <Textarea
            width={{
              base: "250px",
              sm: "400px",
              md: "300px",
              lg: "400px",
              xl: "450px",
              "2xl": "450px",
            }}
            type="text"
            mb={6}
            color="blackAlpha.900"
            bgColor="whiteAlpha.900"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          <br />
          <Button
            onClick={handleClick}
            isDisabled={
              form.email_id.length <= 0 ||
              form.from_name.length <= 0 ||
              form.message.length <= 0
            }
            colorScheme="cyan"
            rightIcon={<FaEnvelope />}
            isLoading={isLoading}
          >
            SEND EMAIL
          </Button>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Contect;

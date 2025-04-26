"use client";
import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const ContactForm = () => {
  const [email] = useState("kevalmakvana84458@gmail.com");
  const [phone] = useState(7203935737);
  const [location] = useState("Una, Gujrat, India");
  const toast = useToast();
  const inputRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: "Copied!",
        description: "Email address copied to clipboard.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Clipboard API failed, trying fallback:", error);

      if (inputRef.current) {
        inputRef.current.select();
        document.execCommand("copy");
        toast({
          title: "Copied (Fallback)!",
          description: "Email address copied using fallback method.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Failed to Copy",
          description: "Could not copy email. Please try again.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    }
  };

  const socialLinks = [
    {
      id: "Git",
      icon: <FaGithub size="2.5rem" />,
      color: "black.100",
      link: "https://github.com/Keval84458",
    },
    {
      id: "LinkedIn",
      icon: <FaLinkedin size="2.5rem" />,
      color: "primary.800",
      link: "https://www.linkedin.com/in/keval-makvana-a164ba281/",
    },
    {
      id: "Twitter",
      icon: <BsTwitterX size="2.5rem" />,
      color: "black.100",
      link: "https://x.com/thechwithkeval",
    },
    {
      id: "Youtube",
      icon: <FaYoutube size="2.5rem" />,
      color: "red.dc35",
      link: "https://www.youtube.com/@techwithkeval2211",
    },
    {
      id: "Facebook",
      icon: <FaFacebook size="2.5rem" />,
      color: "primary.800",
      link: "https://www.facebook.com/keval.makvana.161",
    },
    {
      id: "Instagram",
      icon: <FaSquareInstagram size="2.5rem" />,
      color: "black.100",
      link: "https://www.instagram.com/techwithkeval2211/",
    },
    {
      id: "Whatsapp",
      icon: <FaWhatsappSquare size="2.5rem" />,
      color: "green.115",
      link: "#",
    },
  ];

  return (
    <>
      <Box
        mx={{ base: "auto", md: 0 }}
        display={{ base: "block", md: "flex" }}
        gap="4rem"
      >
        <Box w={{ base: "100%", md: "50%" }}>
          <Text
            fontSize={{ base: "125", sm: "150", md: "175" }}
            transition="all .5s ease"
            fontWeight="extrabold"
            mb=".5rem"
          >
            CONTACT INFORMATION
          </Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MdEmail size="1.4rem" />
            </InputLeftElement>

            <Input ref={inputRef} value={email} readOnly border={0} />

            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleCopy}
                bg="primary.50"
                color="white.100"
              >
                Copy
              </Button>
            </InputRightElement>
          </InputGroup>

          <InputGroup mt=".7rem">
            <InputLeftElement pointerEvents="none">
              <FaPhone size="1.1rem" />
            </InputLeftElement>

            <Input value={phone} px="2.2rem" readOnly border={0} />
          </InputGroup>

          <InputGroup mt=".7rem">
            <InputLeftElement pointerEvents="none">
              <FaLocationDot size="1.2rem" />
            </InputLeftElement>

            <Input value={location} px="2.2rem" readOnly border={0} />
          </InputGroup>
          <Box mt="1.5rem">
            <Text
              fontSize={{ base: "125", sm: "150", md: "175" }}
              transition="all .5s ease"
              fontWeight="extrabold"
              my=".5rem"
            >
              SOCIAL & PROFESSIONAL LINKS
            </Text>
            <Box display="flex" justifyContent="center" alignItems="center">
              {socialLinks.map((social, inx, arr) => {
                return (
                  <>
                    <Text
                      as={Link}
                      href={social.link}
                      mr=".5rem"
                      color={social.color}
                    >
                      {social.icon}
                    </Text>
                  </>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "50%" }} mt={{ base: "2rem", md: 0 }}>
          <Text
            fontSize={{ base: "125", sm: "150", md: "175" }}
            transition="all .5s ease"
            fontWeight="extrabold"
          >
            Click Here to Download My Resume
          </Text>
          <Button
            as="a"
            href="/assets/Resume/KEVAL CV.pdf"
            download="KEVAL CV.pdf"
            leftIcon={<FiDownload />}
            colorScheme="blue"
            variant="solid"
            my={2}
          >
            Download Resume
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;

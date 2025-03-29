"use client";
import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [email] = useState("kevalmakvana84458@gmail.com");
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

  return (
    <Box maxW="400px" mx="auto" mt={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <MdEmail size="1.4rem" />
        </InputLeftElement>

        <Input ref={inputRef} value={email} px="2.2rem" readOnly />

        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleCopy}>
            Copy
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default ContactForm;

"use client";
import React from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <>
      <Box display={{ base: "block", md: "flex" }} gap="1rem">
        <Box w={{ base: "100%", sm: "100%", md: "35%" }}>
          <Image
            mx="auto"
            src="/assets/DSC_0010.JPG"
            width={{ base: "300px", sm: "300px", md: "350px" }}
            height={{ base: "400px", sm: "400px", md: "500px" }}
            alt="Profile Photo"
            rounded="5rem"
            transition="all .5s ease"
            _hover={{
              rounded: "1rem",
            }}
          />
        </Box>
        <Box w={{ base: "100%", sm: "100%", md: "65%" }}>
          <Text
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "250", sm: "300", md: "300", lg: "400" }}
            fontWeight="extrabold"
            color="primary.70"
            lineHeight="3rem"
            pt=".5rem"
          >
            KEVAL MAKVANA
          </Text>
          <Text
            px={{ base: "1rem", md: 0 }}
            fontSize={{ base: "125", md: "150" }}
            mt="1rem"
          >
            Passionate Frontend Developer with 6 months of internshipexperience
            specializing in React.js and Next.js. Proficient in
            craftingresponsive and user-friendly web interfaces using modern
            UIlibraries like Chakra UI, Material UI (MUI), and more.I also run a
            tech-focused YouTube channel,{" "}
            <Text
              fontWeight="extrabold"
              as={Link}
              href={"https://www.youtube.com/@techwithkeval2211"}
              color="primary.70"
              mx=".3rem"
              textDecoration="underline"
            >
              Tech with Keval
            </Text>
            , whereI create tutorials and content to simplify web
            developmentconcepts. Strong focus on clean design, performance,
            andaccessibility in every project I build.
          </Text>
          <Box mt={{ base: "0", md: "1rem" }} px={{ base: "1rem", md: 0 }}>
            <Text fontSize="200">Youtube Channel</Text>
            <Button
              as={Link}
              href="https://www.youtube.com/@techwithkeval2211"
              fontSize="125"
              p="1.5rem"
              bg="primary.40"
              rounded="full"
              transition="all .5s ease"
              _hover={{ boxShadow: "0px 0px 20px 5px rgba(56, 178, 172, 0.7)" }}
              gap={2}
              color="white.100"
            >
              <FaYoutube size="1.5rem" />
              Tech with Keval
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;

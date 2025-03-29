"use client";
import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            src="/assets/DSC_0010.JPG"
            width="300px"
            height="350x"
            alt="Profile Photo"
            roundedTopLeft="4rem"
            roundedBottomRight="4rem"
            transition="all .5s ease"
            _hover={{
              roundedTopLeft: 0,
              roundedBottomRight: 0,
              roundedTopRight: "4rem",
              roundedBottomLeft: "4rem",
            }}
          />
        </Box>
        <Box>
          <Text
            textAlign="center"
            fontSize="300"
            fontWeight="extrabold"
            color="primary.70"
            lineHeight="3rem"
            pt=".5rem"
          >
            KEVAL MAKVANA
          </Text>
          <Text p=".5rem" fontSize="125">
            A Frontend Web Developer with 1 year of experience, specializing in
            React.js, Next.js, Chakra UI, and MUI. Passionate about building
            modern, responsive, and high-performance web applications. Also runs
            a YouTube channel,
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
            sharing in-depth tutorials and insights on frontend development and
            the latest web technologies.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;

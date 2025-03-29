"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Experience = () => {
  return (
    <Box>
      <Text textAlign="center" fontSize="200" fontWeight="bold">
        Work Experience
      </Text>
      <Text fontWeight="bold" fontSize="100">
        * I have accumulated one year of hands-on experience in frontend
        development, consisting of six months of internship and six months of
        professional work specializing in React.js and Next.js. Throughout this
        period, I have built and optimized various web applications using modern
        frontend UI libraries, including Chakra UI, MUI, Tailwind CSS,
        React-Bootstrap, Bootstrap, Reactstrap, and more. My expertise lies in
        creating high-performance, scalable, and visually appealing user
        interfaces with a strong focus on responsiveness and accessibility.
      </Text>
      <Text fontWeight="bold" fontSize="100" mt={3}>
        * Beyond coding, I am also dedicated to content creation and knowledge
        sharing through my YouTube channel,{" "}
        <Text
          as={Link}
          href="https://www.youtube.com/@techwithkeval2211"
          textDecoration="underline"
          fontWeight="extrabold"
          color="primary.50"
        >
          Tech with Keval
        </Text>{" "}
        , where I provide tutorials, guides, and insights on React.js, Next.js,
        frontend frameworks, and UI libraries. My goal is to help aspiring
        developers enhance their skills while continuously improving my own
        expertise in modern web development and content optimization.
      </Text>
    </Box>
  );
};

export default Experience;

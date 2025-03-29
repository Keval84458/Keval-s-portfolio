"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";

const EducationCmp = () => {
  const educationDetails = [
    {
      title: "Bachelor of Computer Application",
      marks: "8.92",
      institute: "SMT V.B Nandola Co. Sci. College",
      city: "Una, Gujrat, India ",
    },
    {
      title: "Higher Secondary Certificate",
      marks: "60.2%",
      institute: "Shah H.D high school",
      city: "Una, Gujrat, India ",
    },
    {
      title: "Secondary School Certificate",
      marks: "55.6%",
      institute: "Shree Gayatri Vidhyalaya Sankul",
      city: "Una, Gujrat, India ",
    },
  ];
  return (
    <Box>
      <Text textAlign="center" fontSize="200" fontWeight="bold">
        Education
      </Text>
      {educationDetails.map((education, inx, arr) => {
        return (
          <Box
            key={inx}
            mt={2}
            p={2}
            boxShadow="md"
            border="1px"
            borderColor="primary.20"
          >
            <Box display="flex">
              <Text fontSize="125" color="primary.50" fontWeight="extrabold">
                {education.title}
              </Text>
            </Box>
            <Box display="flex">
              <Text w="32%">Per/CGPA:</Text>
              <Text ml={1}>{education.marks}</Text>
            </Box>
            <Box display="flex">
              <Text w="32%">School/College:</Text>
              <Text ml={1}>{education.institute}</Text>
            </Box>
            <Box display="flex">
              <Text w="32%">City:</Text>
              <Text ml={1}>{education.city}</Text>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default EducationCmp;

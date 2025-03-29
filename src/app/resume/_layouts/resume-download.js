"use cliennt";
import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";

const ResumeDownload = () => {
  return (
    <Box>
      <Text fontSize="125" fontWeight="extrabold">
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
  );
};

export default ResumeDownload;

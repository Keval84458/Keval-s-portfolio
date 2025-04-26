"use client";
import React from "react";
import { Box, Text, ListItem, UnorderedList } from "@chakra-ui/react";

const ExperienceCMP = () => {
  return (
    <Box display={{ md: "flex" }}>
      <Box w={{ base: "0", md: "60%" }}>
        <Text fontSize="175" fontWeight="bold">
          Frontend Developer Intern
        </Text>
        <Text>Raimtech Solution Pvt. Ltd.</Text>
        <Text fontSize="125" fontWeight="bold">
          Nov 2024 - April 2025
        </Text>
        <UnorderedList mx="3rem">
          <ListItem fontSize="125">
            Completed a 6-month internship focused on React.jsand Next.js for
            building dynamic and scalable webapplications.
          </ListItem>
          <ListItem fontSize="125">
            Developed and maintained responsive userinterfaces using Chakra UI,
            Material UI (MUI), andother modern libraries.
          </ListItem>
          <ListItem fontSize="125">
            Collaborated with senior developers to implementnew features, debug
            issues, and optimize applicationperformance.
          </ListItem>
          <ListItem fontSize="125">
            Gained hands-on experience with API integration,state management
            (e.g., Context API), andcomponent-based architecture.
          </ListItem>
          <ListItem fontSize="125">
            Ensured cross-browser compatibility and mobileresponsiveness in all
            UI components.
          </ListItem>
        </UnorderedList>
      </Box>
      <Box w={{ base: "0", md: "40%" }}>
        <Text fontSize="175" fontWeight="bold">
          Skill & Technology
        </Text>
        <UnorderedList mx="5rem">
          <ListItem>React JS</ListItem>
          <ListItem>Next JS</ListItem>
          <ListItem>Chakra UI</ListItem>
          <ListItem>MUI</ListItem>
          <ListItem>React-Bootstrap</ListItem>
          <ListItem>Bootstrap 5</ListItem>
          <ListItem>Pocketbase</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default ExperienceCMP;

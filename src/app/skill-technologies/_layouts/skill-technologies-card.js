"use client";
import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import CardCMP from "./card";

const SkillTechnologiesCard = () => {
  const skillDetails = [
    {
      id: "ReactJs",
      img: "/assets/Skills/React-logo.png",
      title: "React Js",
    },
    {
      id: "NextJs",
      img: "/assets/Skills/next-logo.png",
      title: "Next Js",
    },
    {
      id: "Bootstrap",
      img: "/assets/Skills/Bootstrap-logo.png",
      title: "React Js",
    },
    {
      id: "ReactBootstrap",
      img: "/assets/Skills/React-bootstrap-logo.png",
      title: "React Bootstrap",
    },
    {
      id: "ChakraUI",
      img: "/assets/Skills/Chakra-ui-logo.jpg",
      title: "Chakra UI",
    },
    {
      id: "MUI",
      img: "/assets/Skills/Mui-logo.jpg",
      title: "MUI",
    },
    {
      id: "Reactstrap",
      img: "/assets/Skills/reactstrap-logo.png",
      title: "Reactstrap",
    },
    {
      id: "TailwindCss",
      img: "/assets/Skills/Tailwind-logo.png",
      title: "Tailwind Css",
    },
    {
      id: "Javascript",
      img: "/assets/Skills/Javascript-logo.png",
      title: "Javascript",
    },
    {
      id: "Html",
      img: "/assets/Skills/Html-logo.png",
      title: "HTML",
    },
    {
      id: "Css",
      img: "/assets/Skills/Css-logo.png",
      title: "CSS",
    },
    {
      id: "Pocketbase",
      img: "/assets/Skills/Pocketbase-logo.png",
      title: "Pocketbase",
    },
    {
      id: "Postman",
      img: "/assets/Skills/Postman-logo.png",
      title: "Postman",
    },
    {
      id: "Github",
      img: "/assets/Skills/Github-logo.jpg",
      title: "Github",
    },
  ];
  return (
    <Box>
      <Text textAlign="center" fontSize="200" fontWeight="bold">
        Skill Technologies
      </Text>
      <SimpleGrid columns={3} spacing={3}>
        {skillDetails.map((skills, inx, arr) => {
          return (
            <Box key={inx}>
              <CardCMP skills={skills} />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default SkillTechnologiesCard;

"use client";
import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import CardCMP from "./card";

const ChannelCards = () => {
  const youtubeDetails = [
    {
      id: "NextJs",
      thumbnail: "/assets/youtubeThumbnails/Nextjs.png",
      title: "Next Js full course 2025",
      link: "https://youtube.com/playlist?list=PLidl7_qEMHZMgVzHrxR6gIKec7_VJIQ6z&si=mk67DrDv2o4hJEBR",
    },
    {
      id: "ReactJs",
      thumbnail: "/assets/youtubeThumbnails/ReactJs.png",
      title: "React.js Beginner to Advanced Full Course | 2025",
      link: "https://youtube.com/playlist?list=PLidl7_qEMHZMHTGZeyzEkuqGP2m-CCifM&si=WP5XWmEcA3uzL4kK",
    },
    {
      id: "Deprecated",
      thumbnail: "/assets/youtubeThumbnails/RIP.png",
      title: "Create React App is officially Deprecated",
      link: "https://youtu.be/6OGyZRmOYg4?si=wV-PkZpBOwSJXsyf",
    },
    {
      id: "ReactIcons",
      thumbnail: "/assets/youtubeThumbnails/reacticons.png",
      title: "How to install React-Icons in React",
      link: "https://youtu.be/TrNGrsJrQsg?si=u0u2VosxwSU_jBSs",
    },
    {
      id: "TypewriterEffect",
      thumbnail: "/assets/youtubeThumbnails/typewriter123.png",
      title: "Typewriter effect in React Js",
      link: "https://youtu.be/UcxdhEIvWPw?si=dA3v-n3iI6AKJIHt",
    },
  ];
  return (
    <>
      <Box>
        <Text
          textAlign="center"
          fontSize="250"
          fontFamily="heading"
          fontWeight="bold"
          color="primary.80"
          lineHeight="2.7rem"
        >
          Tech with Keval
        </Text>
        <Text textAlign="center" pb="1rem" fontWeight="medium">
          Youtube Channel
        </Text>
        <SimpleGrid columns={1} spacing={1}>
          <Box>
            {youtubeDetails.map((ytDetails, ind, arr) => {
              return <CardCMP key={ind} ytDetails={ytDetails} />;
            })}
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ChannelCards;

"use client";
import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import CardCMP from "./card";

const ChannelCards = () => {
  const youtubeDetails = [
    {
      id: "NextJs",
      thumbnail: "/assets/youtubeThumbnails/Next js.png",
      title: "Next Js full course 2025",
      link: "https://youtube.com/playlist?list=PLidl7_qEMHZMgVzHrxR6gIKec7_VJIQ6z&si=mk67DrDv2o4hJEBR",
    },
    {
      id: "ReactJs",
      thumbnail: "/assets/youtubeThumbnails/ReactJs.png",
      title: "React Js full course 2025",
      link: "https://youtube.com/playlist?list=PLidl7_qEMHZMHTGZeyzEkuqGP2m-CCifM&si=WP5XWmEcA3uzL4kK",
    },
    {
      id: "Deprecated",
      thumbnail: "/assets/youtubeThumbnails/RIP.png",
      title: "Create React App is Deprecated",
      link: "https://youtu.be/6OGyZRmOYg4?si=wV-PkZpBOwSJXsyf",
    },
    {
      id: "Carousal&Sliders",
      thumbnail: "/assets/youtubeThumbnails/Sliders.png",
      title: "Carousal & Sliders",
      link: "https://youtube.com/playlist?list=PLidl7_qEMHZNOhq-LrSKM4gERuaHlosl7&si=pzG83Fqrgc3PGyvU",
    },
    {
      id: "Notification&Modals",
      thumbnail: "/assets/youtubeThumbnails/Notification.png",
      title: "Notification & Modals",
      link: "https://youtube.com/playlist?list=PLidl7_qEMHZPddeElYE11dEbYzHSMjZ6e&si=P4n0E92Wn0xXKkk7",
    },
    {
      id: "Animation&Effect",
      thumbnail: "/assets/youtubeThumbnails/Animations.png",
      title: "Notification & Modals",
      link: "https://youtube.com/playlist?list=PLidl7_qEMHZNlGiO-eEhCCBhQllE3_vcl&si=8KJ-ltVcHZTDhUpy",
    },
    {
      id: "Others",
      thumbnail: "/assets/youtubeThumbnails/Others.png",
      title: "Notification & Modals",
      link: "https://youtube.com/playlist?list=PLidl7_qEMHZP2mdqcD9OWmclQWPEd7wbn&si=Ocd0KrDTl5Sf0YJW",
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
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={1}>
          {youtubeDetails.map((ytDetails, ind, arr) => {
            return (
              <Box key={ind}>
                <CardCMP ytDetails={ytDetails} />
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ChannelCards;

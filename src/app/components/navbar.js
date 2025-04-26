"use client";
import React from "react";
import { Box, Flex, Button, Text, HStack } from "@chakra-ui/react";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import Link from "next/link";
import DrawerCMP from "./drawer";

export const headerButton = [
  {
    title: "Home",
    link: PAGE_PATH_KEYS.HOME,
  },
  {
    title: "Contact Me",
    link: PAGE_PATH_KEYS.CONTACT_ME,
  },
  {
    title: "Youtube Channel",
    link: PAGE_PATH_KEYS.YOUTUBE_CHANNEL,
  },
  {
    title: "Experience",
    link: PAGE_PATH_KEYS.EXPERIENCE,
  },
  {
    title: "Education",
    link: PAGE_PATH_KEYS.EDUCATION,
  },
];
const Navbar = () => {
  return (
    <Box
      bg="primary.80"
      px={4}
      boxShadow="md"
      position="fixed"
      w="100%"
      top={0}
      left={0}
      zIndex={1000}
    >
      <Flex h={16} alignItems="center">
        <Box display={{ md: "none" }}>
          <DrawerCMP />
        </Box>

        <Text
          as={Link}
          href={PAGE_PATH_KEYS.HOME}
          fontWeight="bold"
          color="white"
          fontSize={{ base: "125", sm: "3xl" }}
          mx={{ base: "1rem", md: 0 }}
        >
          FRONTEND DEVELOPER
        </Text>
        <Box display={{ base: "none", md: "flex" }} ml={2}>
          <HStack>
            {headerButton.map((btn, inx, arr) => {
              return (
                <Button
                  as={Link}
                  href={btn.link}
                  key={inx}
                  bg="transparent"
                  color="white.100"
                  _hover={{ bg: "transparent" }}
                  _disabled={{ bg: "transparent" }}
                >
                  {btn.title}
                </Button>
              );
            })}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;

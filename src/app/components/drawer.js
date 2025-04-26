"use client";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import Link from "next/link";

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

const DrawerCMP = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<HiOutlineMenu />}
        aria-label="Open Menu"
        display="flex"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white.100">
          <DrawerCloseButton />
          <DrawerBody>
            <Text fontWeight="extrabold" textAlign="center" fontSize="125">
              FRONTEND DEVELOPER
            </Text>
            <VStack spacing={4} mt={10}>
              {headerButton.map((menu, inx, arr) => {
                return (
                  <Box key={inx}>
                    <Button
                      onClick={onClose}
                      as={Link}
                      href={menu.link}
                      bg="white.100"
                      _hover={{
                        bg: "white.100",
                      }}
                      _disabled={{
                        bg: "white.100",
                      }}
                    >
                      {menu.title}
                    </Button>
                  </Box>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerCMP;

"use client";
import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import Link from "next/link";

export const menuButton = [
  {
    name: "HOME",
    route: PAGE_PATH_KEYS.HOME,
  },
  {
    name: "CONTACT ME",
    route: PAGE_PATH_KEYS.CONTACT_ME,
  },
  {
    name: "YOUTUBE CHANNEL",
    route: PAGE_PATH_KEYS.YOUTUBE_CHANNEL,
  },
  {
    name: "SKILL & TECHNOLOGIES",
    route: PAGE_PATH_KEYS.SKILL_TECHNOLOGIES,
  },
  {
    name: "WORK EXPERIENCE",
    route: PAGE_PATH_KEYS.WORK_EXPERIENCE,
  },
  {
    name: "EDUCATION",
    route: PAGE_PATH_KEYS.EDUCATION,
  },
  {
    name: "RESUME",
    route: PAGE_PATH_KEYS.RESUME,
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <IconButton
          icon={<HiOutlineMenu />}
          aria-label="Open Menu"
          display="flex"
          onClick={onOpen}
        />

        <Text
          as={Link}
          href={PAGE_PATH_KEYS.HOME}
          fontWeight="bold"
          color="white"
          fontSize={{ base: "2xl" }}
          mx="1rem"
        >
          FRONTEND DEVELOPER
        </Text>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white.100">
          <DrawerCloseButton />
          <DrawerBody>
            <Text fontWeight="extrabold" textAlign="center" fontSize="150">
              FRONTEND DEVELOPER
            </Text>
            <VStack spacing={4} mt={10}>
              {menuButton.map((menu, inx, arr) => {
                return (
                  <Box key={inx}>
                    <Button
                      w="full"
                      onClick={onClose}
                      as={Link}
                      href={menu.route}
                      bg="white.100"
                      _hover={{
                        bg: "white.100",
                      }}
                      _disabled={{
                        bg: "white.100",
                      }}
                    >
                      {menu.name}
                    </Button>
                  </Box>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;

"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

const CardCMP = ({ ytDetails }) => {
  return (
    <Box>
      <Card
        border="2px"
        borderColor="transparent"
        transition="all .5s ease"
        _hover={{ borderColor: "primary.60" }}
      >
        <CardBody p={3}>
          <Image
            src={ytDetails.thumbnail}
            alt={ytDetails.id}
            borderRadius="lg"
          />
          <Stack mt="2" spacing="3">
            <Heading
              size="md"
              fontFamily="body"
              fontSize={{ base: "125", sm: "125", md: "125" }}
              transition="all .5s ease"
            >
              {ytDetails.title}
            </Heading>
            <Button
              as={Link}
              href={ytDetails.link}
              bg="primary.40"
              color="white.100"
              transition="all .5s ease"
              _hover={{ boxShadow: "2xl", bg: "primary.40" }}
              _disabled={{ bg: "primary.40" }}
              size="sm"
            >
              Watch Now
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CardCMP;

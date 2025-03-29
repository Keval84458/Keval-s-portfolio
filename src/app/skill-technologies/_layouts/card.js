"use client";
import React from "react";
import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";

const CardCMP = ({ skills }) => {
  return (
    <Card h="140px">
      <CardBody p={1}>
        <Image
          src={skills.img}
          alt={skills.id}
          borderRadius="lg"
          height="85px"
          mx="auto"
        />
        <Stack mt="2" spacing="3">
          <Heading size="sm" textAlign="center">
            {skills.title}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardCMP;

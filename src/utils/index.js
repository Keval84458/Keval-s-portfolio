"use client";
import { Box, Input } from "@chakra-ui/react";

export const PageWrapper = ({ children }) => {
  return (
    <Box mt="4rem" p=".5rem" mb="1rem">
      {children}
    </Box>
  );
};

export const ThemeInput = ({ ...rest }) => {
  return <Input type="email" {...rest} />;
};

"use client";
import { ChakraBaseProvider as ChakraProviderCMP } from "@chakra-ui/react";
import theme from "./theme";

const ChakraProvider = ({ children }) => {
  return <ChakraProviderCMP theme={theme}>{children}</ChakraProviderCMP>;
};

export default ChakraProvider;

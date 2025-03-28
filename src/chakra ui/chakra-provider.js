"use client";
import { ChakraProvider as ChakraProviderCMP } from "@chakra-ui/react";
import { Theme } from "./theme";

const ChakraProvider = ({ children }) => {
  return <ChakraProviderCMP value={Theme}>{children}</ChakraProviderCMP>;
};

export default ChakraProvider;

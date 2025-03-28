"use client";
import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const chakraTheme = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          50: "#e6f2ff",
          100: "#cce6ff",
          200: "#99cce6",
          300: "#66b3cc",
          400: "#3399b3",
          500: "#007399",
          600: "#005c7a",
          700: "#004d66",
          800: "#003d52",
          900: "#002e3d",
        },
      },
      fontSizes: {
        xs: { value: "10rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
        "4xl": { value: "2.25rem" },
        "5xl": { value: "3rem" },
        "6xl": { value: "3.75rem" },
      },
    },
  },
});

export const Theme = createSystem(defaultConfig, chakraTheme);

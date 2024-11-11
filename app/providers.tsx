"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { MathJaxContext } from "better-react-mathjax";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0, 200, 0)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          textTransform: "none",
          textAlign: "left",
          padding: "0",
          fontSize: "var(--text-font-size)",
          lineHeight: "var(--text-line-height)",
        },
      },
    },
  },
});

const mathJaxConfig = {
  loader: { load: ["[tex]/ams"] },
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    packages: { "[+]": ["ams"] },
  },
};

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <MathJaxContext config={mathJaxConfig}>{children}</MathJaxContext>
    </ThemeProvider>
  );
};

export default Providers;

"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
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

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;

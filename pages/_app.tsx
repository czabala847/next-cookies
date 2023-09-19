import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "@/styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";

import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import Cookies from "js-cookie";

import { darkTheme, customTheme, lightTheme } from "@/themes";

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";

    console.log("En el cliente", cookieTheme);

    const selectedTheme: Theme =
      cookieTheme === "light"
        ? lightTheme
        : cookieTheme === "dark"
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

import React, { useState } from "react";
import { GetServerSideProps } from "next";
import Cookies from "js-cookie";

import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { Layout } from "@/components/layouts";

interface Props {
  theme: string;
}

const ThemeChangerPage: React.FC<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  console.log("del servidor", { theme });

  const onThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(event.target.value);
    console.log("cambiando", event.target.value);
    Cookies.set("theme", event.target.value);
  };

  return (
    <Layout title="Cambiar tema">
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChangerPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "light" } = req.cookies;

  const validThemes = ["light", "dark", "custom"];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : "dark",
    },
  };
};

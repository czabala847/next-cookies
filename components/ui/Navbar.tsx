import React from "react";
import Link from "next/link";

import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { MenuOpenOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large" edge="start">
            <MenuOpenOutlined />
          </IconButton>

          <Link href="/">
            <Typography variant="h6" color="white">
              CookieMaster
            </Typography>
          </Link>
        </Box>

        <Link href="/theme-changer">
          <Typography variant="h6" color="white">
            Cambiar Tema
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

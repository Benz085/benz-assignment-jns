import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
        width: "100%",
      }}
    >
      <Toolbar>
        <Typography variant="body1" color="inherit">
          &copy; 2024 WEBSITE-DEV
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

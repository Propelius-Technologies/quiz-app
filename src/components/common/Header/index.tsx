import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Header = () => {
  return (
    <AppBar sx={{ zIndex: "1201" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ fontFamily: "sans-serif", fontWeight: "bold" }}
        >
          Propelius Tech
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{ fontFamily: "sans-serif", fontWeight: "bold" }}
        >
          Total Time : 2.40 hours
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

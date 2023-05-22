import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import logo from "@/src/assets/svgs/propelius_logo.svg";
import {
  AppBarstyles,
  TextRoundStyles,
  TextStyles,
  ToolbarInnerBoxStyles,
  ToolBarStyles,
} from "./styles";

const Header = () => {
  return (
    <AppBar sx={AppBarstyles}>
      <Toolbar sx={ToolBarStyles}>
        <Box sx={ToolbarInnerBoxStyles}>
          <Image
            src={logo}
            alt="company_logo"
            fill
            style={{ objectFit: "contain", position: "absolute" }}
          />
        </Box>

        <Box
          sx={{ dislay: "flex", flexDirection: "column", textAlign: "center " }}
        >
          <Typography variant="h6" component="div" sx={TextRoundStyles}>
            Round - 1
          </Typography>

          <Typography variant="h6" component="div" sx={TextStyles}>
            Total Time : 2.40 hours
          </Typography>
        </Box>

        <Typography variant="h6" component="div" sx={TextStyles}>
          Total Time : 2.40 hours
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

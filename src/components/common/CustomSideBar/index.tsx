import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import {
  DraweBox,
  DrawerStyles,
  ListItemIconStyle,
  ListItemStyle,
  ListStyles,
} from "./styles";

const tempArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const SideBar = () => {
  const isSM = useMediaQuery("(max-width:834px)");
  return (
    <Box>
      <Drawer
        variant="permanent"
        anchor={isSM ? "top" : "left"}
        sx={DrawerStyles}
      >
        <Toolbar />
        <Box sx={DraweBox}>
          <List sx={ListStyles}>
            {tempArray.map((text) => (
              <ListItem key={text} disablePadding sx={ListItemStyle}>
                <ListItemButton>
                  <ListItemIcon sx={ListItemIconStyle}>{text}</ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;

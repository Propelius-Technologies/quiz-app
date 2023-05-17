import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

const drawerWidth = "fit-content";
const tempArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const SideBar = () => {
  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{ overflow: "auto", backgroundColor: "#282c48", border: "none" }}
        >
          <List>
            {tempArray.map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#181b32",
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      minWidth: "0",
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      margin: "6px",
                      color: "#56cbd2",
                    }}
                  >
                    {text}
                  </ListItemIcon>
                  {/* <ListItemText primary={text} /> */}
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

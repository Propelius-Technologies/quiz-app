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
  selectedQueStyles,
} from "./styles";
import {mockDataType} from "@/src/data/type";

interface sideBarProps {
  mockQuestionData: mockDataType[];
  handleQuestion: (data: mockDataType, index: number) => void;
  selectedQue: number;
  SelectedQueIdArray: number[];
}

const SideBar: React.FC<sideBarProps> = ({
  mockQuestionData,
  handleQuestion,
  selectedQue,
}) => {
  const isSM = useMediaQuery("(max-width:834px)");

  console.log({ mockQuestionData });
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
            {mockQuestionData.map((data, index: number) => (
              <ListItem
                key={index + 1}
                disablePadding
                sx={index === selectedQue ? selectedQueStyles : ListItemStyle}
                // disabled={SelectedQueIdArray.includes(index) ? true : false}
              >
                <ListItemButton onClick={() => handleQuestion(data, index)}>
                  <ListItemIcon sx={ListItemIconStyle}>
                    {index + 1}
                  </ListItemIcon>
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

import { AppRoutes } from "@/src/constant/appRoutes";

import { pushHandler } from "@/src/utils/genericRouting";
import useStore from "@/src/zustand-store";
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
import { useRouter } from "next/router";
import React from "react";
import {
  DraweBox,
  DrawerStyles,
  ListItemIconStyle,
  ListItemStyle,
  ListStyles,
  selectedQueStyles,
} from "./styles";

interface sideBarProps {}

const SideBar: React.FC<sideBarProps> = () => {
  const isSM = useMediaQuery("(max-width:834px)");
  const getQuestionData = useStore((state) => state.tests);


  const {
    query: { testid, questionid },
  } = useRouter();

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
            {getQuestionData?.testQuestionsAndAnswers?.map(
              (data, index: number) => (
                <ListItem
                  key={index + 1}
                  disablePadding
                  // disabled
                  sx={
                    index + 1 === Number(questionid)
                      ? selectedQueStyles
                      : ListItemStyle
                  }
                >
                  <ListItemButton
                    disabled={data.answer === null ? false : true}
                    onClick={() =>
                      pushHandler(
                        AppRoutes.question(
                          testid as string,
                          (index as number) + 1
                        )
                      )
                    }
                  >
                    <ListItemIcon sx={ListItemIconStyle}>
                      {index + 1}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;

import { Primary_Green } from "@/src/theme/colors";

export const DrawerStyles = {
  width: "fit-content",
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: "drawerWidth",
    boxSizing: "border-box",
    border: "none",
  },
};

export const DraweBox = {
  overflow: "auto",
  backgroundColor: "#282c48",
  border: "none",
  height: "100%"
};

export const ListStyles = {
  display: "flex",
  flexDirection: { sm: "column", xs: "row" },
  padding: "0px",
};

export const ListItemStyle = {
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#181b32",
  },
};

export const selectedQueStyles = {
  backgroundColor: "#181b32",
};

export const ListItemIconStyle = {
  minWidth: "0",
  fontWeight: "bold",
  fontFamily: "sans-serif",
  fontSize: "20px",
  margin: "6px",
  color: Primary_Green,
};

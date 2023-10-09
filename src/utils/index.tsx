import { useMediaQuery } from "@mui/material";
import theme from "../theme";

export const useBreakPoints = () => {
  return useMediaQuery(theme.breakpoints.down("md"));
};

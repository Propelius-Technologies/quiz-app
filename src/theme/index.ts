import { ThemeOptions } from "@mui/material/styles";
import { SUCCESS } from "./colors";
import { ScreenSizes } from "./screen-sizes";

const theme: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "#fff",
          boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",

          "&.MuiDisabled": {
            opacity: 0.4,
            boxShadow: "none !important",
            cursor: "not-allowed",
          },
        },
        outlined: {
          borderWidth: 2,
          fontSize: "16px",
          textTransform: "initial",
        },
        root: {
          "&.MuiDisabled": {
            opacity: 0.4,
            boxShadow: "none !important",
            cursor: "not-allowed",
          },
          borderRadius: "4px",
          height: 50,
          width: "100%",
          maxWidth: 321,
          boxShadow: "none",
          textTransform: "initial",
          fontSize: "16px",
          lineHeight: 2,
          fontWeight: 500,
          padding: 0,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        sizeMedium: {
          textTransform: "capitalize",
          padding: "13px 18px",
          height: 44,
          borderRadius: "100px",
        },
        labelMedium: {
          fontSize: "13px",
          fontWeight: 600,
          lineHeight: "18px",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: ScreenSizes.xsMin,
      sm: ScreenSizes.smMin,
      md: ScreenSizes.mdMin,
      lg: ScreenSizes.lgMin,
      xl: 1536,
    },
  },
  palette: {
    text: {
      disabled: "#686868",
    },
    grey: {
      100: "#f7f7f7",
    },
    error: {
      main: "#D10929",
    },
    success: {
      main: SUCCESS,
    },
    warning: {
      main: "#ED6C02",
    },
    info: {
      main: "#0288D1",
    },
  },
  typography: {
    fontFamily: "Roboto",

    h1: {
      fontWeight: "bold",
      fontSize: "1.5rem", // 24px
    },
    h2: {
      fontWeight: "bold",
      fontSize: "1.25rem", // 20px
    },
    h3: {
      fontWeight: "bold",
      fontSize: "1.125rem", // 18px
    },
    h4: {
      fontWeight: "normal",
      fontSize: "1rem", // 16px
    },
    body1: {
      fontWeight: "normal",
      fontSize: "0.875rem", // 14px
    },
    body2: {
      fontWeight: "normal",
      fontSize: "0.813rem", // 13px
    },
    subtitle1: {
      fontWeight: "normal",
      fontSize: "1rem", // 16px
    },
    subtitle2: {
      fontWeight: "normal",
      fontSize: "0.75rem", // 12px
    },
    overline: {
      fontWeight: "normal",
      fontSize: "0.688rem", // 11px
    },
  },
};

export default theme;

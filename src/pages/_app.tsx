import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import WithLoader from "@/src/components/shared/WithLoader";
import theme from "../theme";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={createTheme({ ...theme })}>
        <CssBaseline />
        <WithLoader>
          <Component {...pageProps} />
        </WithLoader>
      </ThemeProvider>
    </>
  );
}

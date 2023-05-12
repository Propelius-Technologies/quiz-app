import useStore from "@/src/zustand-store";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactNode } from "react";

interface WithLoaderProps {
  children: ReactNode;
}

const WithLoader = ({ children }: WithLoaderProps): JSX.Element => {
  const loading = useStore((state) => state.loading);
  return (
    <>
      {loading ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* <Typography variant="h4">Propelius Tech</Typography> */}
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default WithLoader;

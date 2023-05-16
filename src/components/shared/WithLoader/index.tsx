import useStore from "@/src/zustand-store";
import { CircularProgress } from "@mui/material";
import React, { ReactNode } from "react";
import { LoaderWrapper } from "./styles";

interface WithLoaderProps {
  children: ReactNode;
}

const WithLoader = ({ children }: WithLoaderProps): JSX.Element => {
  const loading = useStore((state) => state.loading);
  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <CircularProgress color="inherit" />
        </LoaderWrapper>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default WithLoader;

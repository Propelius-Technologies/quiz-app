import { CustomButtonProps } from "@/src/types/button.types";
import { Button } from "@mui/material";
import React from "react";
import { ButtonStyle } from "./styles";

const CustomButton = ({ label }: CustomButtonProps) => {
  return (
    <>
      <Button size="small" variant="contained" sx={ButtonStyle}>
        {label}
      </Button>
    </>
  );
};

export default CustomButton;

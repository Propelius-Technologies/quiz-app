import { CustomButtonProps } from "@/src/types/button.types";
import { Button } from "@mui/material";
import React from "react";
import { ButtonStyle } from "./styles";

const CustomButton = ({
  label,
  onclick,
  disabled = false,
}: CustomButtonProps) => {
  return (
    <>
      <Button
        size="small"
        variant="contained"
        onClick={onclick}
        sx={ButtonStyle}
        disabled={disabled}
      >
        {label}
      </Button>
    </>
  );
};

export default CustomButton;

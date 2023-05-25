import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import styled from "@emotion/styled";
import { ButtonText } from "@/src/sections/Authentication/style";
import { ButtonStyle } from "../styles";

export const CustomButtonStyle = styled(LoadingButton)<{
  variant?: "contained" | "outlined";
  disabled?: boolean;
}>`
  --r: 6px; /* radius */
  --b: 2px; /* border width */

  border: ${(props) =>
    props.variant === "outlined" ? "1px solid #40BA77" : "none"};
  background-color: ${(props) =>
    props.variant === "contained" ? "#40BA77" : "none"};
  color: ${(props) => (props.variant === "contained" ? "#fff" : "#40BA77")};

  text-transform: none;
  border-radius: var(--r);
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: relative;
  z-index: 0;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 20px;

  &.MuiButton-outlined {
    border: 1px solid #40ba77;
  }

  &.MuiButton-loading {
    border-color: #40ba77;
    background-color: transparent;
    color: #40ba77;
  }

  &.MuiButton-loading::after {
    border-color: #40ba77;
  }
`;

interface CustomButtonProps extends LoadingButtonProps {
  variant?: "contained" | "outlined";
  style?: React.CSSProperties;
}

// eslint-disable-next-line react/display-name
const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ title, style, variant = "contained", ...props }, ref) => {
    return (
      <CustomButtonStyle
        ref={ref}
        variant={variant}
        // style={style}
        sx={variant === "contained" ? ButtonStyle : ButtonText}
        loadingIndicator={<CircularProgress color="success" size={25} />}
        onMouseOver={(e) => e.currentTarget.focus()}
        {...props}
      >
        {title}
      </CustomButtonStyle>
    );
  }
);

export default CustomButton;

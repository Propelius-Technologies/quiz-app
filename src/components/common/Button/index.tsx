import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import styled from '@emotion/styled';
import {LoadingButton, LoadingButtonProps} from "@mui/lab";

export const CustomButton = styled(LoadingButton)`
  background: #0359a3;
  color: #ffffff;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 20px;

  > .MuiButton-startIcon,
  > .MuiButton-endIcon {
    color: inherit;
  }

  &:hover {
    background: #47b8c1;
  }
`;

interface CustomButtonProps extends LoadingButtonProps {
    fullWidth?: boolean;
}

// eslint-disable-next-line react/display-name
const Button = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ title, ...props }, ref) => {
        return (
            <CustomButton
                ref={ref}
                loadingIndicator={<CircularProgress color={'inherit'} size={25} />}
                onMouseOver={e => e.currentTarget.focus()}
                {...props}>
                {title}
            </CustomButton>
        )
    }
)

export default Button;

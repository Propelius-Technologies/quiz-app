import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton'
import styled from '@emotion/styled'



export const CustomOutlineButtonStyle = styled(LoadingButton)<{
    disabled?: boolean
}>`
  --r: 6px; /* radius */
  --b: 2px; /* border width */
  border:1px solid #40BA77;

  text-transform: none;
  border-radius: var(--r);
  display: flex;
  gap:20px;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: relative;
  z-index: 0;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 20px;
  

`

interface OutLineButtonProps extends LoadingButtonProps {}

// eslint-disable-next-line react/display-name
const OutlineButton = React.forwardRef<HTMLButtonElement, OutLineButtonProps>(
    ({ title, ...props }, ref) => {
        return (
            <CustomOutlineButtonStyle
                ref={ref}
                loadingIndicator={<CircularProgress color={'success'} size={25} />}
                onMouseOver={e => e.currentTarget.focus()}
                {...props}>
                {title}
            </CustomOutlineButtonStyle>
        )
    }
)
export default OutlineButton

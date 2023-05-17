
import styled from '@emotion/styled'
import { Box } from '@mui/material'


export const Card = styled(Box)<{ direction?: string; gap?: string; padding?: string; background?: string }>`
  display: flex;
  flex: 1;
  //height: max-content;
  padding: ${({ padding = '24px' }) => padding};
  gap: ${({ gap = '20px' }) => gap};
  flex-direction: ${({ direction = 'row' }) => direction};
  background: ${({ background = '#FFF' }) => background};
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
`

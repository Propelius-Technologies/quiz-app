// import theme from '@/src/theme'
// import Divider from '@mui/material/Divider'
// import styled from '@mui/system/styled'
// export const HorizontalDivider = styled(Divider)<{ isfullwidth?: string; bgcolor?: string }>`
//   background-color: ${({ bgcolor = theme?.palette?.divider }) => `${bgcolor}`};
//   border-color: ${({ bgcolor = theme.palette.divider }) => `${bgcolor}`};
//   height: 1px;
//   @media (min-width: ${({ theme }) => theme.breakpoints.values.xs}px) {
//     width: ${({ isfullwidth = 'false' }) => (isfullwidth === 'true' ? '100%' : '95%')};
//     margin: 0 auto;
//   }
//   @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
//     width: ${({ isfullwidth = 'false' }) => (isfullwidth === 'true' ? '100%' : '95%')};
//     margin: 0 auto;
//   }
// `
// export const VerticalDivider = styled(Divider)`
//   background-color: ${theme.palette.divider};
//   width: 1px;
//   @media (min-width: ${({ theme }) => theme.breakpoints.values.xs}px) {
//     margin: 0 auto;
//   }
//   @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
//     margin: 0 auto;
//   }
// `
import { ScreenSizes } from "@/src/theme/screen-sizes";
import { styled } from "@mui/material";

export const StyledContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
};

export const PaperStyle = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  mx: { xs: "20px", sm: "30px", md: "200px" },
  padding: "20px",
};

export const FormControlLabelStyle = {
  "&:hover": {
    border: "2px solid #46a997",
  },
  "& .MuiFormControlLabel-label": {
    fontSize: { xs: "13px", md: "20px" },
  },
};

export const QuestionBoxStyle = styled("div")`
  width: 50%;
  @media screen and (min-width: ${ScreenSizes.xsMin}px) {
    width: 100%;
  }
  ,
  @media screen and (min-width: ${ScreenSizes.smMin}px) {
    width: 100%;
  }
`;

export const OptionBoxStyle = styled("div")`
  width: 50%;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${ScreenSizes.xsMin}px) {
    width: 100%;
  }
  ,
  @media screen and (min-width: ${ScreenSizes.smMin}px) {
    width: 100%;
  }
`;

export const QuestionTextStyle = styled("h6")`
  font-weight: bold;
  font-size: font-size: ${({ theme }) => theme.typography.h3};
  padding: 20px;
  text-align: justify;
  display:flex;
  gap:5px;
  @media screen and (min-width: ${ScreenSizes.xsMin}px) {
    padding: 0 10px 0 10px;
  }

  ,
  @media screen and (min-width: ${ScreenSizes.smMin}px) {
    font-size: ${({ theme }) => theme.typography.h4}
    padding: 10px;
  }

  @media screen and (min-width: ${ScreenSizes.mdMin}px) {
    font-size: ${({ theme }) => theme.typography.h3}
    padding: 20px;
  }
`;

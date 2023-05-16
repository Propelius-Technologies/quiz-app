import { Container, Paper } from "@mui/material";
import React from "react";
import Option from "./option";
import Question from "./question";
import { PaperStyle, StyledContainer } from "./styles";

const Welcome = () => {
  return (
    <>
      <Container maxWidth="xl" sx={StyledContainer}>
        <Paper elevation={1} sx={PaperStyle}>
          <Question />
          <Option />
        </Paper>
      </Container>
    </>
  );
};

export default Welcome;

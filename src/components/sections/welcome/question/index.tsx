import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { QuestionBoxStyle, QuestionTextStyle } from "../styles";

const Question = () => {
  return (
    <QuestionBoxStyle>
      <QuestionTextStyle>
        <span>{`1)`}</span>
        You wrote a snippet of code in JavaScript for the browser. Now you want
        to port that code to Node.js. However, the browser code uses the object
        to store and access global variables, which is not available in Node.js.
      </QuestionTextStyle>
    </QuestionBoxStyle>
  );
};

export default Question;

import { Box } from "@mui/system";
import React from "react";
import Option from "./section/option";
import Question from "./section/question";

const Welcome = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box width="50%">
          <Question />
        </Box>

        <Box width="50%">
          <Option />
        </Box>
      </Box>
    </>
  );
};

export default Welcome;

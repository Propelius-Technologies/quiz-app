import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Question = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontSize: "16px", padding: "20px" }}>
        You wrote a snippet of code in JavaScript for the browser. Now you want
        to port that code to Node.js. However, the browser code uses the object
        to store and access global variables, which is not available in Node.js.
      </Typography>
    </Box>
  );
};

export default Question;

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Question = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          padding: { xs: "10px", md: "20px" },
          fontWeight: "bold",
        }}
      >
        You wrote a snippet of code in JavaScript for the browser. Now you want
        to port that code to Node.js. However, the browser code uses the object
        to store and access global variables, which is not available in Node.js.
      </Typography>
    </Box>
  );
};

export default Question;

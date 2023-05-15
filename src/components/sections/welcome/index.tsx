import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Option from "./section/option";
import Question from "./section/question";

const Welcome = () => {
  return (
    <>
      <Box>
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            margin: { xs: "20px", sm: "30px", md: "50px" },
            padding: "20px",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Question />
          </Box>

          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Option />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Welcome;

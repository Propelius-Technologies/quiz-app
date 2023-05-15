import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Option from "./section/option";
import Question from "./section/question";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Welcome = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
          <Box>
            <MobileStepper
              variant="progress"
              steps={6}
              position="static"
              activeStep={activeStep}
              sx={{
                maxWidth: 400,
                flexGrow: 1,
                mt: 3,
                ".MuiMobileStepper-progress": {
                  width: "100%",
                  borderRadius: "5px",
                  height: 7,
                },
              }}
              nextButton={null}
              backButton={null}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Question />
              </Box>

              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Option />
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Welcome;

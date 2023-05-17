import {
  Avatar,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MobileStepper,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import CircularStatic from "../common/CustomCircularProgess";
import { FormControlLabelStyle, formLabelStyle } from "./styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomButton from "../common/CustomButton";

const Assessment = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  let tempArray = [1, 2, 3, 4];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 10);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "60%",
            backgroundColor: "#282c48",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              px: "70px",
              py: "30px",
              margin: "0px",
              width: "100%",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px !important",
              }}
            >
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Avatar sx={{ fontWeight: "bold", backgroundColor: "#181b32" }}>
                  <PersonOutlineTwoToneIcon sx={{ color: "#595e83" }} />
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontFamily: "sans-serif",
                    alignSelf: "center",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Bidyut Samanta
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#fff",
                    fontFamily: "sans-serif",
                  }}
                >
                  {`Total test: ${activeStep}% completed`}
                </Typography>
                <MobileStepper
                  variant="progress"
                  steps={100}
                  position="static"
                  activeStep={activeStep}
                  sx={{
                    maxWidth: 600,
                    flexGrow: 1,
                    width: "100%",
                    py: 1,
                    backgroundColor: "#282c48",
                    ".MuiMobileStepper-progress": {
                      width: "100%",
                      borderRadius: "10px",
                      height: 4,
                    },
                  }}
                  nextButton={null}
                  backButton={null}
                />
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ border: "1px solid #5f658d47" }} />

          <Grid
            container
            spacing={2}
            sx={{
              gap: "30px",
              px: "70px",
              py: "30px",
              margin: "0px",
              width: "100%",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px !important",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#61678c",
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  alignSelf: "center",
                }}
              >
                6 ANSWERS LEFT
              </Typography>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#61678c",
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "sans-serif",
                    alignSelf: "center",
                  }}
                >
                  Time Remaining
                </Typography>
                <CircularStatic />
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ padding: "0px !important" }}>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  color: "#efefef",
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                  gap: "5px",
                }}
              >
                <span>{`1)`}</span>
                What changes would appear that is not appear but it can in the
                component as soon as the state of the React component is
                changed?
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ padding: "0px !important" }}>
              <FormControl sx={{ width: "100%" }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={(e) => console.log(e.target.value)}
                >
                  {tempArray.map((data, index) => {
                    return (
                      <>
                        <FormControlLabel
                          value={data}
                          key={index}
                          control={
                            <Radio
                              sx={{ color: "#71748b59" }}
                              checkedIcon={<CheckCircleIcon />}
                            />
                          }
                          label="Please Select Any one Option"
                          sx={FormControlLabelStyle}
                        />
                      </>
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                padding: "0px !important",
                width: "100%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <CustomButton
                onclick={handleNext}
                label="Next question"
                activeStep={activeStep}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Assessment;

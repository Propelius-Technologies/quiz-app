import {
  Avatar,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
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
import CircularStatic from "../../common/CustomCircularProgess";
import {
  AssessmentBox,
  AvatarContainer,
  AvatarStyles,
  ContinerStyle,
  customButtonContainer,
  DividerStyles,
  FormControlLabelStyle,
  InnerContainerStyle,
  InnerContainerstyles,
  leftAnswerContainerStyle,
  LeftAnswerTextStyles,
  MobileStepperStyles,
  OptionFormControlStyle,
  OptionGridContainerStyle,
  PaperStyles,
  PersonOutlineTwoToneIconStyle,
  QuestionContainerStyles,
  QuestionTextStyles,
  TimeRemainingContainerStyles,
  TimeRemainingTextStyles,
  UserNameTextStyles,
  userTotalCompletedTextStyles,
} from "./styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomButton from "../../common/CustomButton";

const Assessment = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  let tempArray = [1, 2, 3, 4];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 10);
  };

  return (
    <>
      <Box sx={AssessmentBox}>
        <Paper elevation={3} sx={PaperStyles}>
          <Grid container spacing={2} sx={ContinerStyle}>
            <Grid item xs={12} sx={InnerContainerStyle}>
              <Box sx={AvatarContainer}>
                <Avatar sx={AvatarStyles}>
                  <PersonOutlineTwoToneIcon
                    sx={PersonOutlineTwoToneIconStyle}
                  />
                </Avatar>
                <Typography variant="h6" sx={UserNameTextStyles}>
                  Bidyut Samanta
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={userTotalCompletedTextStyles}>
                  {`Total test: ${activeStep}% completed`}
                </Typography>
                <MobileStepper
                  variant="progress"
                  steps={100}
                  position="static"
                  activeStep={activeStep}
                  sx={MobileStepperStyles}
                  nextButton={null}
                  backButton={null}
                />
              </Box>
            </Grid>
          </Grid>

          <Divider sx={DividerStyles} />

          <Grid container spacing={2} sx={InnerContainerstyles}>
            <Grid item xs={12} sx={leftAnswerContainerStyle}>
              <Typography variant="h6" sx={LeftAnswerTextStyles}>
                6 ANSWERS LEFT
              </Typography>
              <Box sx={TimeRemainingContainerStyles}>
                <Typography variant="h6" sx={TimeRemainingTextStyles}>
                  Time Remaining
                </Typography>
                <CircularStatic />
              </Box>
            </Grid>

            <Grid item xs={12} sx={QuestionContainerStyles}>
              <Typography variant="h6" sx={QuestionTextStyles}>
                <span>{`1)`}</span>
                What changes would appear that is not appear but it can in the
                component as soon as the state of the React component is
                changed?
              </Typography>
            </Grid>

            <Grid item xs={12} sx={OptionGridContainerStyle}>
              <FormControl sx={OptionFormControlStyle}>
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

            <Grid item xs={12} sx={customButtonContainer}>
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

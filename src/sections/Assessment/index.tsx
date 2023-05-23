import {
  Avatar,
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
import React, { useEffect, useState } from "react";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
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
import CircularStatic from "@/src/components/common/CustomCircularProgess";
import { mockDataType } from "@/src/data/type";
import CustomButton from "@/src/components/common/CustomButton";
import useStore from "@/src/zustand-store";
import { useRouter } from "next/router";
import { getQuestions } from "@/src/zustand-store/test/test.selector";
import GetStepContent from "./QuestionBlock";

interface AssessmentProps {
  handleNext: () => void;
}

const Assessment: React.FC<AssessmentProps> = ({ handleNext }) => {
  const {
    query: { testid, questionid },
  } = useRouter();
  const fetchTests = useStore((state) => state.fetchTests);
  const getQuestion = useStore((state) => getQuestions(state, testid));

  useEffect(() => {
    fetchTests();
  }, [fetchTests]);

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
              {getQuestion?.length && (
                <Box>
                  <Typography variant="h6" sx={userTotalCompletedTextStyles}>
                    {`Total test: ${Math.round(
                      (Number(questionid) / getQuestion?.length) * 100
                    )}% completed`}
                  </Typography>
                  <MobileStepper
                    variant="progress"
                    steps={getQuestion?.length + 1}
                    position="static"
                    sx={MobileStepperStyles}
                    nextButton={null}
                    backButton={null}
                  />
                </Box>
              )}
            </Grid>
          </Grid>

          <Divider sx={DividerStyles} />

          <GetStepContent handleNext={handleNext} />
        </Paper>
      </Box>
    </>
  );
};

export default Assessment;

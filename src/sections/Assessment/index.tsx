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

// import CustomButton from "@/src/components/common/CustomButton";
import useStore from "@/src/zustand-store";
import { useRouter } from "next/router";
import { getQuestions } from "@/src/zustand-store/test/test.selector";
import GetStepContent from "./QuestionBlock";
import { pushHandler } from "@/src/utils/genericRouting";
import { AppRoutes } from "@/src/constant/appRoutes";
import { dataTypes } from "@/src/zustand-store/types";

interface AssessmentProps {}

const Assessment: React.FC<AssessmentProps> = () => {
  const router = useRouter();
  const testData = useStore((state) => state.tests);

  const getSelectedAns = useStore((state) => state.selectedAnswer);
  const setSelectedAns = useStore((state) => state.setSelectedAnswer);

  const getTimeTaken = useStore((state) => state.timeTaken);

  const submitAns = useStore((state: any) => state.submitAns);

  const {
    query: { testid, questionid },
  } = useRouter();

  const handleNext = (id: number) => {
    let data = {
      questionId: id,
      timeTaken: getTimeTaken,
      answer: [getSelectedAns],
      isLastQuestion: false,
    };

    // if (getSelectedAns && data) {
    submitAns(testid, data);
    // }
    setSelectedAns("");

    pushHandler(
      AppRoutes.question(testid as string, (Number(questionid) + 1) as number)
    );
  };

  const handleSubmit = (id: number) => {
    let data = {
      questionId: id,
      timeTaken: getTimeTaken,
      answer: [getSelectedAns],
      isLastQuestion: true,
    };
    console.log("dataget --->", data);

    // if (getSelectedAns && data) {
    submitAns(testid, data);
    // }

    router.push("/user");
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
              {testData?.testQuestionsAndAnswers?.length > 0 && (
                <Box>
                  <Typography variant="h6" sx={userTotalCompletedTextStyles}>
                    {`Total test: ${Math.round(
                      (Number(questionid) /
                        testData?.testQuestionsAndAnswers?.length) *
                        100
                    )}% completed`}
                  </Typography>
                  <MobileStepper
                    variant="progress"
                    steps={testData?.testQuestionsAndAnswers?.length + 1}
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

          <GetStepContent handleNext={handleNext} handleSubmit={handleSubmit} />
        </Paper>
      </Box>
    </>
  );
};

export default Assessment;

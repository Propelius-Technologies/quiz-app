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
import React, { useEffect } from "react";
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

interface AssessmentProps {
  selectedQue: number;
  activeStep: number;
  handleNext: () => void;
}

interface stepComponentProps {
  question?: mockDataType | undefined;
  selectedQue: number;
  activeStep: number;
  handleNext: () => void;
  queId: number;
}

const getStepContent = ({
  question,
  activeStep,
  handleNext,
  selectedQue,
  queId,
}: stepComponentProps) => {
  const handleSubmit = () => {
    console.log("bhgu");
  };

  return (
    <Grid container spacing={2} sx={InnerContainerstyles}>
      <Grid item xs={12} sx={leftAnswerContainerStyle}>
        <Typography variant="h6" sx={LeftAnswerTextStyles}>
          6 ANSWERS LEFT
        </Typography>
        <Box sx={TimeRemainingContainerStyles}>
          <Typography variant="h6" sx={TimeRemainingTextStyles}>
            Time Remaining
          </Typography>
          <CircularStatic activeStep={activeStep} />
        </Box>
      </Grid>

      <Grid item xs={12} sx={QuestionContainerStyles}>
        <Typography variant="h6" sx={QuestionTextStyles}>
          <span>{`${queId})`}</span>
          {question?.question}
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
            {question?.option && (
              <>
                {Object.entries(question.option).map((data, index) => {
                  return (
                    <>
                      <FormControlLabel
                        value={data[1]}
                        key={index}
                        control={
                          <Radio
                            sx={{ color: "#71748b59" }}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        }
                        label={data[1]}
                        sx={FormControlLabelStyle}
                      />
                    </>
                  );
                })}
              </>
            )}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={customButtonContainer}>
        {activeStep === 95 ? (
          <CustomButton
            onclick={handleSubmit}
            label="submit"
            activeStep={activeStep}
          />
        ) : (
          <CustomButton
            onclick={handleNext}
            label="Next question"
            activeStep={activeStep}
          />
        )}
      </Grid>
    </Grid>
  );
};

const Assessment: React.FC<AssessmentProps> = ({
  selectedQue,
  activeStep,
  handleNext,
}) => {
  const { query } = useRouter();
  const { testid, questionid } = query;
  const fetchTests = useStore((state) => state.fetchTests);
  const getQuestion = useStore((state) => getQuestions(state, testid));
  const question = getQuestion ? getQuestion[Number(questionid)] : {};

  const queId = Number(questionid);

  console.log({ question });
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

              <Box>
                <Typography variant="h6" sx={userTotalCompletedTextStyles}>
                  {`Total test: ${
                    getQuestions.length && (queId / getQuestions?.length) * 100
                  }% completed`}
                </Typography>
                <MobileStepper
                  variant="progress"
                  steps={getQuestion?.length + 1}
                  position="static"
                  activeStep={queId}
                  sx={MobileStepperStyles}
                  nextButton={null}
                  backButton={null}
                />
              </Box>
            </Grid>
          </Grid>

          <Divider sx={DividerStyles} />
          {getStepContent({
            question,
            queId,
            activeStep,
            handleNext,
            selectedQue,
          })}
        </Paper>
      </Box>
    </>
  );
};

export default Assessment;

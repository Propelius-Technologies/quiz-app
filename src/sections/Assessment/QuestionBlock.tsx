import CircularStatic from "@/src/components/common/CustomCircularProgess";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import {
  customButtonContainer,
  FormControlLabelStyle,
  InnerContainerstyles,
  leftAnswerContainerStyle,
  LeftAnswerTextStyles,
  OptionFormControlStyle,
  OptionGridContainerStyle,
  QuestionContainerStyles,
  QuestionTextStyles,
  TimeRemainingContainerStyles,
  TimeRemainingTextStyles,
} from "./styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useStore from "@/src/zustand-store";
import { useRouter } from "next/router";
import { getQuestions } from "@/src/zustand-store/test/test.selector";
import InputArea from "@/src/components/common/InputArea";
import { useState } from "react";

import OutlineButton from "@/src/components/common/CustomButton/OutlineButton";
import { ButtonStyle } from "@/src/components/common/CustomButton/styles";

interface stepComponentProps {
  handleNext: () => void;
}

const GetStepContent = ({ handleNext }: stepComponentProps) => {
  const getSelectedAns = useStore((state) => state.selectedAnswer);
  const setSelectedAns = useStore((state) => state.setSelectedAnswer);

  const handleChangeAnswer = (value: string) => {
    setSelectedAns(value);
  };

  const {
    query: { testid, questionid },
  } = useRouter();

  const getQuestionData = useStore((state) => state.tests);

  const question =
    getQuestionData?.testQuestionsAndAnswers &&
    getQuestionData?.testQuestionsAndAnswers[Number(questionid) - 1];

  const questionId = Number(questionid);

  const BtnLabel =
    questionId === getQuestionData?.testQuestionsAndAnswers?.length
      ? "Submit"
      : "Next question";

  //Text Area code =====

  const testData = useStore((state) => state.tests);

  return (
    <Grid container spacing={2} sx={InnerContainerstyles}>
      <Grid item xs={12} sx={leftAnswerContainerStyle}>
        {getQuestionData?.testQuestionsAndAnswers?.length > 0 && (
          <Typography variant="h6" sx={LeftAnswerTextStyles}>
            {getQuestionData?.testQuestionsAndAnswers?.length - questionId}{" "}
            ANSWERS LEFT
          </Typography>
        )}
        <Box sx={TimeRemainingContainerStyles}>
          <Typography variant="h6" sx={TimeRemainingTextStyles}>
            Time Remaining
          </Typography>
          <CircularStatic />
        </Box>
      </Grid>

      <Grid item xs={12} sx={QuestionContainerStyles}>
        <Typography variant="h6" sx={QuestionTextStyles}>
          <span>{`${questionId})`}</span>
          {question?.question?.question}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={OptionGridContainerStyle}>
        {question?.question?.type === "mcq" ? (
          <FormControl sx={OptionFormControlStyle}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => handleChangeAnswer(e.target.value)}
            >
              {question?.question?.options && (
                <>
                  {Object.values(question?.question?.options).map(
                    (data, index) => {
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
                            label={data as React.ReactNode}
                            sx={FormControlLabelStyle}
                          />
                        </>
                      );
                    }
                  )}
                </>
              )}
            </RadioGroup>
          </FormControl>
        ) : (
          <Box sx={{ height: "250px" }}>
            <InputArea />
          </Box>
        )}
      </Grid>
      <Grid item xs={12} sx={customButtonContainer}>
        <OutlineButton
          variant="contained"
          title={BtnLabel}
          onClick={handleNext}
          disabled={getSelectedAns === undefined}
        />
      </Grid>
    </Grid>
  );
};

export default GetStepContent;

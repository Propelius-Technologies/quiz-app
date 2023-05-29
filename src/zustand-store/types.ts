import { StateCreator } from "zustand";
import { TestDataType } from "../data/type";

export type AppStateCreator<T extends Object> = StateCreator<
  T,
  [["zustand/devtools", never]]
>;

export interface LoaderSliceProps {
  loading: boolean;
  enableLoader: () => void;
  disableLoader: () => void;
}

export interface dataTypes {
  testId: number;
  questionId: number;
  timeTaken: number;
  answer: string[];
  isLastQuestion: boolean;
}

export interface TestSliceProps {
  // TODO REMOVE THIS
  tests: TestDataType;
  selectedAnswer: string | undefined;
  fetchTests: (testId: number) => void;
  submitAns: (testId: number, data: dataTypes) => void;
  setSelectedAnswer: (value: string | undefined) => void;
}

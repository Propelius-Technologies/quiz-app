import { createSelector } from "reselect";
import { StoreType } from "..";

const getTests = (state: StoreType) => state.tests;

export const getCurrentTest = createSelector(
  [getTests, (state, testid) => testid],
  (test, testid) => {
    // TODO REMOVE THIS
    const currentTest = test.find((i: any) => i.id === Number(testid));
    return currentTest;
  }
);

export const getQuestions = createSelector(
  [getCurrentTest, (state, testid) => testid],
  (test, testid) => {
    return test?.questions;
  }
);

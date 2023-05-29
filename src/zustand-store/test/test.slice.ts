import { testData } from "@/src/data/MockData";
import { fetchAction } from "@/src/utils/api.utils";
import { AppStateCreator, TestSliceProps } from "../types";

export const testInitialData = {
  id: 0,
  isFeedbackRequired: false,
  feedback: null,
  score: null,
  status: "",
  candidateId: 0,
  roundId: 0,
  createdAt: "",
  updatedAt: "",
  testQuestionsAndAnswers: [],
};

const createTestSlice: AppStateCreator<TestSliceProps> = (set) => ({
  tests: testInitialData,
  selectedAnswer: undefined,
  fetchTests: async (testId) => {
    if (testId) {
      const res = await fetchAction({
        url: `/tests/${testId}`,
        method: "GET",
      });
      set((state) => ({ ...state, tests: res.data }));
    }
  },
  submitAns: async (testId, data) => {
    const submitData = await fetchAction({
      url: `/tests/${testId}/answer`,
      method: "PATCH",
      data,
    });
    set((state) => ({ ...state, selectedAnswer: undefined }));
  },
  setSelectedAnswer: (value) =>
    set((state) => ({ ...state, selectedAnswer: value })),
});

export default createTestSlice;

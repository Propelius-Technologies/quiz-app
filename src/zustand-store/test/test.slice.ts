import { testData } from "@/src/data/MockData";
import { AppStateCreator, TestSliceProps } from "../types";

const createTestSlice: AppStateCreator<TestSliceProps> = (set) => ({
  tests: [],
  selectedAnswer: undefined,
  fetchTests: () => set((state) => ({ ...state, tests: testData })),
  setSelectedAnswer: (value) =>
    set((state) => ({ ...state, selectedAnswer: value })),
});

export default createTestSlice;

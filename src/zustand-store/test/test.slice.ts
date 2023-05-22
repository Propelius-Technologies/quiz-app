import { testData } from "@/src/data/MockData";
import { AppStateCreator, TestSliceProps } from "../types";

const createTestSlice: AppStateCreator<TestSliceProps> = (set) => ({
  tests: [],
  fetchTests: () => set((state) => ({ ...state, tests: testData })),
});

export default createTestSlice;

import { SnackbarProps } from "@mui/material";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import createCandidateSlice, {
  CandidateSlice,
} from "./candidate/candidate.slice";
import dashboardDataSlice, {
  DashboardSlice,
} from "./Dashboard/dashboard.slice";
import createLoaderSlice from "./loader/loader.slice";
// import createSnackbarSlice from "./snackbar/snackbar.slice";
import createTestSlice from "./test/test.slice";
import { LoaderSliceProps, TestSliceProps } from "./types";

export type StoreType = CandidateSlice &
  LoaderSliceProps &
  TestSliceProps &
  DashboardSlice &
  SnackbarProps;

const useStore = create<StoreType>()(
  devtools((...args) => ({
    ...createCandidateSlice(...args),
    ...createLoaderSlice(...args),
    ...createTestSlice(...args),
    ...dashboardDataSlice(...args),
    // ...createSnackbarSlice(...args),
  }))
);

export default useStore;

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import createCandidateSlice, { CandidateSlice } from "./candidate";
import createLoaderSlice from "./loader/loader.slice";
import { LoaderSliceProps } from "./types";

export type StoreType = CandidateSlice & LoaderSliceProps;

const useStore = create<StoreType>()(
  devtools((...args) => ({
    ...createCandidateSlice(...args),
    ...createLoaderSlice(...args),
  }))
);

export default useStore;

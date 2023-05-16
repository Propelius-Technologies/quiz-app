import { AppStateCreator, LoaderSliceProps } from "../types";

const createLoaderSlice: AppStateCreator<LoaderSliceProps> = (set) => ({
  loading: false,
  enableLoader: () => set((state) => ({ ...state, loading: true })),
  disableLoader: () => set((state) => ({ ...state, loading: false })),
});

export default createLoaderSlice;

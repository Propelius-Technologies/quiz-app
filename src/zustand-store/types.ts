import { StateCreator } from "zustand";

export type AppStateCreator<T extends Object> = StateCreator<
  T,
  [["zustand/devtools", never]]
>;

export interface LoaderSliceProps {
  loading: boolean;
  enableLoader: () => void;
  disableLoader: () => void;
}

import { userData, userDataTypes } from "@/src/data/MockData";
import { AppStateCreator } from "../types";

export interface CandidateSlice {
  user: userDataTypes;
  fetchUser: () => void;
}

const createCandidateSlice: AppStateCreator<CandidateSlice> = (set, get) => ({
  user: {
    name: undefined,
    email: undefined,
    password: undefined,
  },
  fetchUser: () => set((state) => ({ ...state, user: userData })),
});

export default createCandidateSlice;

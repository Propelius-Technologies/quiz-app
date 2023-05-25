import { fetchAction } from "@/src/utils/api.utils";
import { AppStateCreator } from "../types";

// export interface CandidateSlice {
//   data: {
//     id: number;
//     uid: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//     contactNumber: string;
//     testUrl: string;
//     createdAt: string;
//     updatedAt: string;
//   };
// }

export interface CandidateSlice {
  userData: any;
  fetchApplicant: (data: any) => void;
  setUserData: (value: string | undefined) => void;
  getAccesstoken: (data: any) => void;
}

export interface Data {
  id: number;
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  testUrl: string;
  createdAt: string;
  updatedAt: string;
}

// console.log("url", window.location.pathname);
// let data = {
//   candidateId: "8d41cfa5-b894-4067-9339-00054751d826",
// };

// export const fetchDataType = {
//   // data: any;
// };

const createCandidateSlice: AppStateCreator<CandidateSlice> = (set, get) => ({
  userData: [],
  fetchApplicant: async (data: any) => {
    const res = await fetchAction({
      url: "/candidates/login",
      method: "POST",
      data,
    });
    // console.log({ res });
    return await res.data;
  },
  setUserData: (value) => set((state) => ({ ...state, userData: value })),
  getAccesstoken: async (data: any) => {
    const res = await fetchAction({
      url: "/candidates/login",
      method: "POST",
      data,
    });
    return await res.data;
  },
});

export default createCandidateSlice;

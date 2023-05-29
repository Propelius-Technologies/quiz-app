import { fetchAction } from "@/src/utils/api.utils";
import { AppStateCreator } from "../types";

export interface SubmitDataSlice {
  SubmitDataAPI: () => void;
}

const submitAnsSlice: AppStateCreator<SubmitDataSlice> = (set, get) => ({
  SubmitDataAPI: async () => {
    const submitAns = await fetchAction({
      url: "/tests/answer/",
      method: "PATCH",
    });
  },
});

export default submitAnsSlice;

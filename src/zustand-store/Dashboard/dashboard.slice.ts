import { fetchAction } from "@/src/utils/api.utils";
import { AppStateCreator } from "../types";

export interface DashboardSlice {
  dashboardData: any;
  fetchDashboardData: () => void;
}

const dashboardDataSlice: AppStateCreator<DashboardSlice> = (set, get) => ({
  dashboardData: [],
  fetchDashboardData: async () => {
    const res = await fetchAction({
      url: "/candidates/dashboard",
      method: "GET",
    });

    set((state) => ({ ...state, dashboardData: res.data }));
    return await res.data;
  },
});

export default dashboardDataSlice;

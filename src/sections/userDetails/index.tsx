import { Box, Grid } from "@mui/material";
import CandidateDetails from "@/src/sections/userDetails/candidateDetails";
import StartTest from "@/src/sections/userDetails/startTest";
import { MainBox } from "@/src/sections/userDetails/style";
import useStore from "@/src/zustand-store";
import { useEffect } from "react";

interface UserDetailsProps {}

const UserDetails = ({}: UserDetailsProps) => {
  const fetchDashboardData = useStore((state) => state.fetchDashboardData);

  const getUserData = async () => {
    let data: any = await fetchDashboardData();
    return data;
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Box sx={MainBox}>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <CandidateDetails />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={8}>
          <StartTest />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDetails;

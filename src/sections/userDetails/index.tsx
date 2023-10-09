import { Box, Grid } from "@mui/material";
import CandidateDetails from "@/src/sections/userDetails/candidateDetails";
import StartTest from "@/src/sections/userDetails/startTest";
import { MainBox } from "@/src/sections/userDetails/style";
import useStore from "@/src/zustand-store";
import { useEffect, useState } from "react";
import { keyHasSameValueInAllObjects } from "@/src/utils/keyHasSameValue";
import SuccessModel from "@/src/components/successPage";

interface UserDetailsProps {}

const UserDetails = ({}: UserDetailsProps) => {
  const fetchDashboardData = useStore((state) => state.fetchDashboardData);
  const [isModel, setIsModel] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  const getAllUser = async () => {
    const data: any = await fetchDashboardData();
    // console.log(data);
    // keyHasSameValueInAllObjects(data?.tests, "status");
    // console.log("getData", keyHasSameValueInAllObjects(data?.tests, "status"));
    setIsModel(keyHasSameValueInAllObjects(data?.tests, "status"));
    setIsTestCompleted(keyHasSameValueInAllObjects(data?.tests, "status"));
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
      <Box sx={MainBox}>
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CandidateDetails />
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={8}>
            <StartTest isAllTestCompleted={isTestCompleted} />
          </Grid>
        </Grid>
      </Box>
      <SuccessModel isOpen={isModel} handleClose={() => setIsModel(false)} />
    </>
  );
};

export default UserDetails;

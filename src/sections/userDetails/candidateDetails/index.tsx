import { Avatar, Divider, Card, Typography, Box } from "@mui/material";
import { CandidateDetailsList } from "@/src/mock/candidateDetails";
import {
  Avtar,
  AvtarBox,
  AvtarName,
  CandidateName,
  DetailCard,
  DetailText,
  MainBox,
  MainCard,
  PersonDetails,
} from "@/src/sections/userDetails/candidateDetails/style";
import useStore from "@/src/zustand-store";

interface CandidateDetailsProps {}

const CandidateDetails = ({}: CandidateDetailsProps) => {
  const dashboardData = useStore((state) => state.dashboardData);

  return (
    <Card sx={MainCard}>
      <Box sx={MainBox}>
        <Box sx={AvtarBox}>
          <Avatar sx={Avtar}>
            <Typography sx={AvtarName}>
              {dashboardData?.firstName?.charAt(0)}
              {dashboardData?.lastName?.charAt(0)}
            </Typography>
          </Avatar>
        </Box>
        <Box sx={DetailCard}>
          <Typography sx={CandidateName}>
            {dashboardData?.firstName} {dashboardData?.lastName}
          </Typography>
          <Divider sx={{ color: "#fff", width: "100%" }} />
          <Box sx={PersonDetails}>
            <Typography sx={DetailText}>{dashboardData?.email}</Typography>
            <Typography sx={DetailText}>
              {dashboardData?.openings?.map((i: any) => i.name)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CandidateDetails;

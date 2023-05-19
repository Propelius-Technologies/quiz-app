import {Box, Grid} from "@mui/material";
import CandidateDetails from "@/src/section/userDetails/candidateDetails";
import StartTest from "@/src/section/userDetails/startTest";
import {MainBox} from "@/src/section/userDetails/style";

interface UserDetailsProps { }

const UserDetails = ({}: UserDetailsProps) => {
    return (
      <Box sx={MainBox}>
        <Grid container spacing={{ xs: 2, sm: 4 }}>
            <Grid item xs={12} sm={6} md={4}>
                <CandidateDetails/>
            </Grid>
            <Grid item xs={12} sm={6} md={8} >
                <StartTest/>
            </Grid>
        </Grid>
      </Box>
      
    )
}

export default UserDetails;

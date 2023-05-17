import {Box} from "@mui/material";
import CandidateDetails from "@/src/section/userDetails/candidateDetails";
import StartTest from "@/src/section/userDetails/startTest";

interface UserDetailsProps { }

const UserDetails = ({}: UserDetailsProps) => {
    return (
       <Box sx={{display:'flex',flexDirection: {sm:'row',xs:'column'},justifyContent:'center'}}>
           <CandidateDetails/>
           <StartTest/>
       </Box>
    )
}

export default UserDetails;

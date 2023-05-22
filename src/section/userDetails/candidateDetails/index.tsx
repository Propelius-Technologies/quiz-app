import {Avatar,Divider, Card, Typography, Box} from "@mui/material";
import { CandidateDetailsList } from "@/src/mock/candidateDetails";
import {
    Avtar, AvtarBox,
    AvtarName, CandidateName, DetailCard,
    DetailText, MainBox,
    MainCard, PersonDetails
    
} from "@/src/section/userDetails/candidateDetails/style";


interface CandidateDetailsProps {}

const CandidateDetails = ({}: CandidateDetailsProps) => {
    return (
        <Card sx={MainCard}>
            <Box sx={MainBox}>
                <Box sx={AvtarBox}>
                    <Avatar sx={Avtar}>
                        <Typography sx={AvtarName}>
                            {CandidateDetailsList?.firstName.charAt(0)}
                            {CandidateDetailsList?.lastName.charAt(0)}
                        </Typography>
                    </Avatar>
                </Box>
                <Box sx={DetailCard}>
                    <Typography sx={CandidateName}>
                        {CandidateDetailsList?.firstName} {CandidateDetailsList?.lastName}
                    </Typography>
                    <Divider sx={{color:'#fff',width:'100%'}}/>
                    <Box sx={PersonDetails}>
                        <Typography sx={DetailText}>
                        {CandidateDetailsList?.email}
                    </Typography>
                    <Typography sx={DetailText}>
                        {CandidateDetailsList?.position}
                    </Typography>
                    </Box>
                </Box>
            </Box>
        </Card>
    
    )
}

export default CandidateDetails;

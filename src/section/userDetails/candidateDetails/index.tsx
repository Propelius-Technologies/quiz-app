import {Avatar, Button, Divider, Card, Typography, Box} from "@mui/material";
import { CandidateDetailsList } from "@/src/mock/candidateDetails";
import {
    Avtar, AvtarBox,
    AvtarName, DetailCard,
    DetailText, MainBox,
    MainCard,
    
} from "@/src/section/userDetails/candidateDetails/style";


interface CandidateDetailsProps { }

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
                    <Typography sx={{ color: "#fff", fontSize: {sm:"32px",xs:'22px'}, fontWeight: "700" }}>
                        {CandidateDetailsList?.firstName} {CandidateDetailsList?.lastName}
                    </Typography>
                    <Typography sx={DetailText}>
                        {CandidateDetailsList?.email}
                    </Typography>
                    <Typography sx={DetailText}>
                        {CandidateDetailsList?.position}
                    </Typography>
                </Box>
            </Box>
        </Card>
    
    )
}

export default CandidateDetails;

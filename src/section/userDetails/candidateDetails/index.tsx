import { Card } from '@/src/components/common/card';
import {Avatar, Box, Divider, Typography} from "@mui/material";
import { CandidateDetailsList } from "@/src/mock/candidateDetails";
import CandidateDetail from "@/src/components/common/CandidateDetail";

interface CandidateDetailsProps { }

const CandidateDetails = ({}: CandidateDetailsProps) => {
    return (
        <Box
            sx={{
                margin:'30px 15px',
             
            }}
        >
            <Card sx={{maxWidth:'fit-content',alignItems:'center',padding:{sm:'50px',xs:'65px'}}}   direction={'column'} gap={'30px'}>
                <Avatar sx={{ backgroundColor: '#0359a3', width: {sm:'150px',xs:'100px'}, height:{sm:'150px',xs:'100px'} }}>
                   <Typography sx={{fontSize: {sm:'56px',xs:'26px'}}}> {CandidateDetailsList?.firstName.charAt(0) + (CandidateDetailsList?.lastName.charAt(0)) || ''}</Typography>
                </Avatar>
                <Card background={'#F0F0F0'} width={'fit-content'} sx={{padding:{sm:'24px',xs:'20px'} }} direction={'column'}>
                    <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>Details</Typography>
                    <Card sx={{width:'fit-content' }} padding={'20px'} direction={'column'}>
                        <CandidateDetail label={'First Name'} value={CandidateDetailsList?.firstName}/>
                        <Divider  />
                        <CandidateDetail label={'Last Name'} value={CandidateDetailsList?.lastName}/>
                        <Divider />
                        <CandidateDetail label={'Email'} value={CandidateDetailsList?.email}/>
                        <Divider />
                        <CandidateDetail label={'Applying For'} value={CandidateDetailsList?.position}/>
                        <Divider/>
                    </Card>
                </Card>
            </Card>
        </Box>
    )
}

export default CandidateDetails;

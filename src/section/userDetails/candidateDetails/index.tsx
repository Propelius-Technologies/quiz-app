import { Card } from '@/src/components/common/card';
import {Avatar,Button, Divider, Typography} from "@mui/material";
import { CandidateDetailsList } from "@/src/mock/candidateDetails";
import CandidateDetail from "@/src/components/common/CandidateDetail";
import Image from "next/image";
import {
    Avtar,
    AvtarName,
    DetailText,
    MainCard,
    SecondCard,
    StartButton
} from "@/src/section/userDetails/candidateDetails/style";
import {assets} from "@/src/assets/assets";

interface CandidateDetailsProps { }

const CandidateDetails = ({}: CandidateDetailsProps) => {
    return (
            <Card sx={MainCard} background={'#282C48'}  direction={'column'} gap={'30px'}>
                <Avatar sx={Avtar}>
                   <Typography sx={AvtarName}> {CandidateDetailsList?.firstName.charAt(0) + (CandidateDetailsList?.lastName.charAt(0)) || ''}</Typography>
                </Avatar>
                <Card  background={'#181B32'} width={'100%'} sx={SecondCard} direction={'column'}>
                    <Typography sx={DetailText}>Details</Typography>
                    <Card sx={{width:'100%' }} direction={'column'} background={'#282C48'}>
                        <CandidateDetail label={'First Name'} value={CandidateDetailsList?.firstName}/>
                        <Divider />
                        <CandidateDetail label={'Last Name'} value={CandidateDetailsList?.lastName}/>
                        <Divider/>
                        <CandidateDetail label={'Email'} value={CandidateDetailsList?.email}/>
                        <Divider/>
                        <CandidateDetail label={'Applying For'} value={CandidateDetailsList?.position}/>
                        <Divider/>
                    </Card>
                </Card>
                <Button variant="contained"  sx={StartButton}>
                    <Image src={assets.images.COPY_LINK} alt={'copy link'} width={20} height={20}/>
                    Copy Exam Link
                </Button>
            </Card>
    )
}

export default CandidateDetails;

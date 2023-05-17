import { Card } from '@/src/components/common/card';
import { Box, Button, Typography } from "@mui/material";
import CandidateDetail from "@/src/components/common/CandidateDetail";
import Image from "next/image";

interface StartTestProps { }

const StartTest = ({}: StartTestProps) => {
    return (
        <Box sx={{ margin: '30px 15px', display: "flex", justifyContent: "center" }}>
            <Card direction="column" sx={{
                padding: { xs: '15px', sm: '50px' },
                gap: '50px',
                width: { xs: '100%', sm: 'fit-content' },
                maxWidth: '100%'
            }}>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    <Image src='/images/verified-document.svg' alt={'verified document'} width={60} height={60} />
                    <Box>
                        <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>Your test is ready</Typography>
                        <Typography sx={{ fontSize: { xs: '10px', sm: '16px' } }}>Your customized test has been successfully generated.</Typography>
                    </Box>
                </Box>
                <Card direction="column" sx={{ border: '1px solid #000', width: 'fit-content',padding:{sm:'24px',xs:'10px'}}}>
                    <CandidateDetail label={'Aptitute Round'} value={'60 min'} />
                    <CandidateDetail label={'Technical Round'} value={'20 min'} />
                    <CandidateDetail label={'Descriptive Round'} value={'30 min'} />
                    <CandidateDetail label={'R&D Round'} value={'50 min'} />
                    <CandidateDetail label={'Coding Round'} value={'1 hr'} />
                </Card>
                <Button variant="contained" fullWidth sx={{ backgroundColor: '#0359a3', maxWidth: '100%' }}>Start your test</Button>
            </Card>
        </Box>
    );
}

export default StartTest;

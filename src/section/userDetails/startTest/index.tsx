import { Card } from '@/src/components/common/card';
import {Box, Button, Grid, Typography} from "@mui/material";
import Image from "next/image";
import {TestDetailsList} from "@/src/mock/testDetails";
import {
    Description,
    ListCard, ListContainerCard,
    MainBox,
    MainCard, StartTestButton, StartTestButtonBox,
    TestHeader,
    TestHeading, TestRound
} from "@/src/section/userDetails/startTest/style";
import {assets} from "@/src/assets/assets";

interface StartTestProps { }

const StartTest = ({}: StartTestProps) => {
    return (
        <Box sx={MainBox}>
            <Card direction="column" sx={MainCard} background={'#282C48'} >
                <Box sx={TestHeader}>
                    <Image src={assets.images.DOCUMENT_ICON} alt={'verified document'}  width={60} height={60} />
                    <Box>
                        <Typography sx={TestHeading}>Your test is ready</Typography>
                        <Typography sx={Description}>Your customized test has been successfully generated.</Typography>
                    </Box>
                </Box>
                <Card background={'#181B32'} sx={ListContainerCard}>
                    <Grid container spacing={5}>
                        {TestDetailsList.map((data,index)=>{
                            return(
                                <Grid item xs={12} sm={12} md={6} key={index}>
                                    <Card background={'#282C48'}  width={'100%'} sx={ListCard}>
                                        <Typography sx={TestRound}>{data.test} </Typography>
                                        <Typography sx={TestRound}>{data.time}</Typography>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Card>
                <Box sx={StartTestButtonBox}>
                <Button variant="contained"  sx={StartTestButton} >Start your test</Button>
                </Box>
            </Card>
        </Box>
    );
}

export default StartTest;

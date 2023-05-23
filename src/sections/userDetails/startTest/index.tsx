import {Box, Button, Grid, Card, Typography, IconButton} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from "next/image";
import {TestDetailsList} from "@/src/mock/testDetails";
import {
    Description,
    ListCard, ListContainerCard,
    MainBox,
    MainCard, StartTestButton, StartTestButtonBox,
    TestHeader,
    TestHeading, TestRound
} from "@/src/sections/userDetails/startTest/style";
import {assets} from "@/src/assets/assets";
import Instructions from "@/src/sections/userDetails/Instructions";

interface StartTestProps { }

const StartTest = ({}: StartTestProps) => {
    
    return (
        <Box sx={MainBox}>
            <Card  sx={MainCard} >
                <Box sx={TestHeader}>
                    <Image src={assets.images.DOCUMENT_ICON} alt={'verified document'}  width={60} height={60} />
                    <Box>
                        <Typography sx={TestHeading}>Your test is ready</Typography>
                        <Typography sx={Description}>Your customized test has been successfully generated.</Typography>
                    </Box>
                </Box>
                <Card sx={ListContainerCard}>
                    <Grid container spacing={5}>
                        {TestDetailsList.map((data,index)=>{
                            return(
                                <Grid item xs={12} sm={12} md={12} lg={6} key={index}>
                                    <Card sx={{...ListCard,backgroundColor: data.isActive ? '#40BA77' : '#282C48'}}>
                                        <Typography sx={TestRound}>{data.test} </Typography>
                                        <Typography sx={TestRound}>
                                            {data.isCompleted ? (
                                                <IconButton size="small" color="inherit">
                                                    <CheckCircleIcon sx={{width:'30px',height:'30px',color:'#40BA77'}} />
                                                </IconButton>
                                            ) :data.time}
                                            
                                        </Typography>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Card>
                <Instructions/>
                <Box sx={StartTestButtonBox}>
                <Button variant="contained"  sx={StartTestButton} >Start your test</Button>
                </Box>
            </Card>
        </Box>
    );
}

export default StartTest;

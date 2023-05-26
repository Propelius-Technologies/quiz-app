import { Box, Button, Grid, Card, Typography, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import { TestDetailsList } from "@/src/mock/testDetails";
import {
  Description,
  ListCard,
  ListContainerCard,
  MainBox,
  MainCard,
  StartTestButton,
  StartTestButtonBox,
  TestHeader,
  TestHeading,
  TestRound,
} from "@/src/sections/userDetails/startTest/style";
import { assets } from "@/src/assets/assets";
import Instructions from "@/src/sections/userDetails/Instructions";
import useStore from "@/src/zustand-store";
import { useRouter } from "next/router";
import { useEffect } from "react";

let testID: number = 0;
interface StartTestProps {}

const StartTest = ({}: StartTestProps) => {
  const router = useRouter();

  const dashboardData = useStore((state) => state.dashboardData);

  useEffect(() => {
    dashboardData?.tests?.map((data: any) => {
      if (data.status === "active") {
        testID = data.id;
      }
    });
  }, []);

  const handleTest = () => {
    router.push(`/${testID}/1`);
  };

  return (
    <Box sx={MainBox}>
      <Card sx={MainCard}>
        <Box sx={TestHeader}>
          <Image
            src={assets.images.DOCUMENT_ICON}
            alt={"verified document"}
            width={60}
            height={60}
          />
          <Box>
            <Typography sx={TestHeading}>Your test is ready</Typography>
            <Typography sx={Description}>
              Your customized test has been successfully generated.
            </Typography>
          </Box>
        </Box>
        <Card sx={ListContainerCard}>
          <Grid container spacing={5}>
            {dashboardData?.tests?.map((data: any, index: number) => {
              return (
                <Grid item xs={12} sm={12} md={12} lg={6} key={index}>
                  <Card
                    sx={{
                      ...ListCard,
                      backgroundColor:
                        data.status === "active" ? "#40BA77" : "#282C48",
                    }}
                  >
                    <Typography sx={TestRound}>{data.round.name} </Typography>
                    <Typography sx={TestRound}>
                      {data.status === "complete" ? (
                        <IconButton
                          size="small"
                          color="inherit"
                          sx={{ padding: "0px" }}
                        >
                          <CheckCircleIcon
                            sx={{
                              width: "26px",
                              height: "26px",
                              color: "#40BA77",
                            }}
                          />
                        </IconButton>
                      ) : (
                        "1 hour"
                      )}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Card>
        <Instructions />
        <Box sx={StartTestButtonBox}>
          <Button variant="contained" sx={StartTestButton} onClick={handleTest}>
            Start your test
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default StartTest;

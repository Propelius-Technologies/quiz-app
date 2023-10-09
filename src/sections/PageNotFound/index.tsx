import { Box, Button, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useBreakPoints } from "@/src/utils";
import { useRouter } from "next/router";
import { Greay_Light } from "@/src/theme/colors";
import { assets } from "@/src/assets/assets";

const Wrapper = styled(Box)`
  background-color: #cacaca;
  // margin-top: 75px;
  min-height: calc(100vh);
  padding: 80px 0px;
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    padding: 150px 0px;
  }
`;

const ContentWrapper = styled(Stack)`
  padding: 0px 40px;
  position: relative;
  z-index: 1;
`;

const ImageWrapper = styled(Stack)`
  width: 60px;
  height: 60px;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 100px;
    height: 100px;
  }
`;

const PageNotFound = () => {
  const {
    query: { page },
  } = useRouter();
  const isMobile = useBreakPoints();

  return (
    <Wrapper >
      <ContentWrapper alignItems="center">
        <ImageWrapper>
          <Image
            src={assets.svgs.USER_AVATAR}
            style={{ width: "100%", height: "100%" }}
            alt="user"
          />
        </ImageWrapper>
        <Typography sx={{ fontSize: "24px", mt: "50px", fontWeight: "600" }}>
          Oops!
        </Typography>
        <Typography fontSize={18} mt={"16px"} textAlign="center">
          {`The ${page ?? "page"} you are looking for does not exist`}
        </Typography>
        {/* <Box sx={{ mt: "50px", width: "50%", maxWidth: "350px" }}>
          <Button fullWidth>Go Back</Button>
        </Box> */}
      </ContentWrapper>
    </Wrapper>
  );
};

export default PageNotFound;

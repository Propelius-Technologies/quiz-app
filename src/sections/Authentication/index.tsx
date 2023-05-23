import { Box, Typography} from "@mui/material";
import GOOGLE_ICON from '@/src/assets/svgs/GoogleIcon.svg'
import Image from "next/image";
import OutlineButton from "@/src/components/common/CustomButton/OutlineButton";
import {Button, ButtonText, Logo, MainBox, SignIN, WelcomeBox} from "@/src/sections/Authentication/style";
import PROPELIUS_LOGO from "@/src/assets/svgs/propelius_logo.svg"

interface AuthenticationProps{
    handleGoogleAuth : () => void,
    isLoading : boolean
   
}
const Authentication = ({handleGoogleAuth,isLoading}:AuthenticationProps) =>{
    return(
        <>
            <Box sx={MainBox}>
                <Box sx={WelcomeBox}>
                    <Box sx={Logo}>
                        <Image src={PROPELIUS_LOGO} alt={'logo'} layout="responsive" width={50} height={50} />
                        <Typography sx={SignIN}>Please sign in with your provided email to get started</Typography>
                    </Box>
                    <Box sx={Button}>
                        <OutlineButton
                            sx={ButtonText}
                            loading={isLoading}
                            onClick={handleGoogleAuth}
                            title="Sign in with Google"
                            startIcon={!isLoading && <Image src={GOOGLE_ICON} height={23} width={23} alt="Google Icon" />}
                        />
                    </Box>
                  
                </Box>
            </Box>
        </>
    )
}

export default Authentication
import {Alert, Box, Typography} from "@mui/material";
import GOOGLE_ICON from '@/src/assets/svgs/GoogleIcon.svg'
import Image from "next/image";
import OutlineButton from "@/src/components/common/CustomButton/OutlineButton";

interface AuthenticationProps{
    handleGoogleAuth : () => void,
    isLoading : boolean
   
}
const Authentication = ({handleGoogleAuth,isLoading}:AuthenticationProps) =>{
    return(
        <>
         <Box sx={{backgroundColor:'#181B32',width:'100%',height:'100vh'}}>
            <Box sx={{ display:'flex',
                flexDirection:'column',
                gap:'50px',
                
                justifyContent:'center',
                alignItems:'center',
                width:'100%',height:'100%'}}>
                <Typography sx={{
                    fontSize: {sm:'56px',xs:'32px'},
                    fontWeight:'700',
                    color:'#FFF',textAlign:'center'
                }}>
                    Welcome to propelius <br/> technologies
                </Typography>
                <Typography sx={{
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#FFF',
                    textAlign: 'center'}}>Please sign in with your provided email to get started</Typography>
                <OutlineButton loading={isLoading} onClick={handleGoogleAuth} title={ 'Sign in with google'} startIcon={!isLoading && <Image src={GOOGLE_ICON} height={23} width={23} alt={'Google Icon'} />} />
            </Box>
            
         </Box>
        </>
    )
}

export default Authentication
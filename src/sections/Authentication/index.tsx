import { Box, Typography} from "@mui/material";
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
                gap: {sm:'20px',xs:'30px'},
                justifyContent:'center',
                alignItems:'center',
                padding:'20px',
                width:'100%',height:'100%'}}>
                <Typography sx={{
                    fontFamily:'sans-serif',
                    fontSize: {md:'56px',sm:'36px',xs:'26px'},
                    fontWeight:'700',
                    color:'#FFF',textAlign:'center'
                }}>
                    Welcome To Propelius <br/> Technologies
                </Typography>
             
                <Typography sx={{
                    fontFamily:'sans-serif',
                    fontSize: {sm:'20px',xs:'16px'},
                    fontWeight: '500',
                    color: '#FFF',
                    textAlign: 'center'}}>Please sign in with your provided email to get started</Typography>
                <Box
                    sx={{
                        width: { xs: "237px" },
                        marginTop: {sm:"40px",xs:'15px'}
                    }}
                >
                    <OutlineButton
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
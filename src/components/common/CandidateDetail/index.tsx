import {Box,Typography} from '@mui/material'
import {Label, MainBox, Value} from "@/src/components/common/CandidateDetail/style";


interface  CandidateDetailsProps{
   label:string
    value:string
}
const CandidateDetail = ({label,value }: CandidateDetailsProps) => {
    return (
        <Box sx={MainBox}  >
            <Typography sx={Label}> {label} : </Typography>
            <Typography sx={Value}> {value} </Typography>
        </Box>
    )
}
export default  CandidateDetail

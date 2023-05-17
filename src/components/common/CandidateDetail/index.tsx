import {Box, Typography} from '@mui/material'


interface  CandidateDetailsProps{
   label:string
    value:string
}
const CandidateDetail = ({label,value }: CandidateDetailsProps) => {
    return (
        <Box sx={{ width: 'fit-content', display: 'flex', gap: '20px' }}>
            <Typography
                sx={{
                    width: '50%',
                    flexShrink:0,
                    fontSize: { xs: '12px', sm: '16px' },
                    fontWeight: '600',
                }}
            >
                {label} :
            </Typography>
            <Typography
                sx={{
                    width:'50%',
                    flexShrink:0,
                    fontSize: { xs: '12px', sm: '16px' },
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                }}
            >
                {value}
            </Typography>
        </Box>
    )
}
export default  CandidateDetail

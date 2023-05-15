import React from 'react';
import {Avatar, Box, Button, Card, CardActions, CardContent, Grid, Typography} from '@mui/material';
import {candidateDetails} from '@/src/mock/CandidateDetails'

interface ConfirmDetailsPageProps{}
const CofirmDetailsPage = ({}:ConfirmDetailsPageProps) => {
  return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'}}>
          <Card sx={{ width:'20%' }}>
            <CardContent>
              <Box sx={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                 <Avatar sx={{height:'70px',width:'70px'}}>{candidateDetails?.firstName.charAt(0)+(candidateDetails?.lastName.charAt(0)) || 'U'}</Avatar>
              </Box>
              <Grid container spacing={2}>
                {Object.entries(candidateDetails).map(([key, value]) => (
                  <>
                    <Grid item xs={6} sm={6} md={6} key={key}>
                      <Typography variant="subtitle1">{key}:</Typography>
                    </Grid>
                      <Grid item xs={6} sm={6} md={6} key={key}>
                      <Typography variant="body1">{value}</Typography>
                    </Grid>
                  </>
                ))}
              </Grid>
            </CardContent>
            <CardActions>
              <Button size='small'>Confirm</Button>
              <Button size='small'>No</Button>
            </CardActions>
          </Card>
      </Box>
  );
}

export default CofirmDetailsPage;
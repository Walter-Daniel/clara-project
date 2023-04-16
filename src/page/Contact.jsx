import { Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contact = () => {
  return (
    <div id='contact'>
     <Typography variant='h2' textAlign='center' padding={5} color="secondary">CONTACTO</Typography>
      <Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} >
        <Typography variant='href' textAlign='center' padding={5} >Github</Typography>
        <GitHubIcon />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} >
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} >
        </Grid>

      </Grid>
    </div>
  )
}

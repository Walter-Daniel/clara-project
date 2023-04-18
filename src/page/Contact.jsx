import { Button, Grid, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Contact = () => {
  return (
    <div id='contact' className='bg-contact'>
     <Typography variant='h2' textAlign='center' padding={5} color="secondary">CONTACTO</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4} >
        <Button size="small" href="https://github.com/Walter-Daniel" sx={{ paddingRight: '1.9rem' }} color='secondary' target='_blank' variant="contained">
          <GitHubIcon />
          <Typography padding={1} >Github</Typography>  
        </Button>
        <Button size="small" href="https://www.linkedin.com/in/walter-daniel-carrizo/" sx={{ paddingRight: '1.9rem' }} color='secondary' target='_blank' variant="contained">
          <LinkedInIcon />
          <Typography padding={1} >Linkedin</Typography>
        
        </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} >
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} >
        </Grid>

      </Grid>
    </div>
  )
}

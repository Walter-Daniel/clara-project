import { Box, Typography, Grid} from '@mui/material';
import { CardSkills } from '../components/Cardskills';
import pin from '../assets/img/tack/pin.png';

export const Skills = () => {
  return (
    <>
     <Box id='skills' className='container-skills' sx={{ border:'1px solid black', padding:'1rem', mt:1, position: 'relative'}}>
        <img src={pin} alt={pin} className='borderImageRight'/>
        <img src={pin} alt={pin} className='borderImageLeft'/>
     <Typography variant='h2'padding={2} marginBottom={2}>Habilidades</Typography>      
      <Grid container spacing={2} className='card-container'>
      <CardSkills />
      
      </Grid>
     </Box>
    </>
  )
}

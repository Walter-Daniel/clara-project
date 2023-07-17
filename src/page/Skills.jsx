import { Box, CardContent, Card, CardHeader, Typography, Grid} from '@mui/material';
import { CardSkills } from '../components/Cardskills';

export const Skills = () => {
  return (
    <>
     <Box id='skills' className='container-skills' sx={{ border:'1px solid black', padding:'7px', mt:1}}>
      <Typography variant='h2' textAlign='center' padding={2}>HABILIDADES</Typography>
      <hr />
      <Grid container spacing={2} className='card-container'>
      <CardSkills />
      
      </Grid>
     </Box>
    </>
  )
}

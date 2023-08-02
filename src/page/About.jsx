import { Box, Button, Grid, Typography } from '@mui/material';
import pin from '../assets/img/tack/pin.png';


export const About = () => {
  return (
    <Box id="about" sx={{ border:'1px solid black', padding:'1rem', position: 'relative' }}>
      <img src={pin} alt={pin} className='borderImageRight'/>
        <img src={pin} alt={pin} className='borderImageLeft'/>
      <Typography variant='h2'padding={2}>Acerca de mí</Typography>
    <Grid
        container
        spacing={2} 
        alignItems="center"
        marginTop='1rem'
      >
        <Grid item xs={12} md={5} display='flex' justifyContent='center'>
          <figure>
            <img
                  src="https://res.cloudinary.com/journal-project/image/upload/v1680532880/sh4x6pp7sxqkj03bxyhy.png"
                  srcSet="https://res.cloudinary.com/journal-project/image/upload/v1680532880/sh4x6pp7sxqkj03bxyhy.png"
                  alt="Walter Daniel Carrizo"
                  loading="lazy"
                  height="100%"
                  style={{ border:'1px solid black', padding:'1rem', marginRight:'1rem'  }}
                />
          </figure>
        </Grid>
        <Grid item xs={12} md={7} sx={{ border:'1px solid black', padding:'1rem'}} >
          <Typography variant='h3'>Walter Daniel Carrizo</Typography>
          <hr />
          <Typography>
            Soy Desarrollador Web FullStack (MERN) y estudiante de la tecnicatura "Programador Universitario" en la Universidad Nacional de Tucumán, Argentina. Mis mayores fortalezas son mi paciencia, mi empatía y mi empeño en aprender. Cada paso, aunque pequeño sea, es un avance y eso me motiva a desempeñarme cada día mejor en mi disciplina. Soy amante de la tecnología, fotografías y de la naturaleza.
          </Typography>
          <hr />
          <Button href='https://drive.google.com/file/d/1dyAoGt9AD7ZkSX0Tm2O8IOAxGdv0Kyxi/view' variant='contained' color='secondary' target='_blank' fullWidth>Ver Currículo</Button>
      </Grid>
      
      </Grid>
    </Box>
    
  )
}

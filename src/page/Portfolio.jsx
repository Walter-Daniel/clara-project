import React from 'react'
import { CardPortfolio } from '../components/CardPortfolio'
import { Box, Typography } from '@mui/material'
import nudo1 from '../assets/img/tack/nudo1.png'
import nudo2 from '../assets/img/tack/nudo2.png'


export const Portfolio = () => {
  return (
    <>
      <Box id="projects" sx={{ border: '1px solid black', mt:2, padding:'1rem', position: 'relative', overflow:'inherit' }}>
        <img src={nudo2} alt={nudo2} className='borderImage'/>
        <Typography variant='h2'padding={2}>Proyectos</Typography>
        <CardPortfolio />
      </Box>
    </>
  )
}

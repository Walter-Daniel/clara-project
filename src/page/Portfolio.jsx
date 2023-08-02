import React from 'react'
import { CardPortfolio } from '../components/CardPortfolio'
import { Box, Typography } from '@mui/material'
import pin from '../assets/img/tack/pin.png'


export const Portfolio = () => {
  return (
    <>
      <Box id="projects" sx={{ border: '1px solid black', mt:2, padding:'1rem', position: 'relative' }}>
        <img src={pin} alt={pin} className='borderImageRight'/>
        <img src={pin} alt={pin} className='borderImageLeft'/>
        <Typography variant='h2'padding={2}>Proyectos</Typography>
        <CardPortfolio />
      </Box>
    </>
  )
}

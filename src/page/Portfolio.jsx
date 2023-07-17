import React from 'react'
import { CardPortfolio } from '../components/CardPortfolio'
import { Box, Typography } from '@mui/material'


export const Portfolio = () => {
  return (
    <>
      <Box id="projects" sx={{ border: '1px solid black', mt:2, padding:'1rem' }}>
        <Typography variant='h2'padding={2}>Proyectos</Typography>
        <hr />
        <CardPortfolio />
      </Box>
    </>
  )
}

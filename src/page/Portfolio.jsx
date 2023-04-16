import React from 'react'
import { CardPortfolio } from '../components/CardPortfolio'
import { Box, Typography } from '@mui/material'


export const Portfolio = () => {
  return (
    <>
      <Box id="projects">
        <Typography variant='h2' textAlign='center' padding={5}>Proyectos</Typography>
        <CardPortfolio />
      </Box>
    </>
  )
}

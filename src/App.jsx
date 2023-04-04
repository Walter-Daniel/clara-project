import { Box, Container } from '@mui/material';
import { About, Contact, Hero, Navbar, Portfolio, Skills } from './page';
import { AppTheme } from './theme/AppTheme';


function App() {
  return (

    <AppTheme>
      <Box sx={{ backgroundColor: '#000000', color: '#ffffff' }}>
        <Container>
          <Navbar />
          
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </Container>
      </Box>
    </AppTheme>
    
  )
}

export default App

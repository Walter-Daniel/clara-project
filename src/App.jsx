import { Box, Container } from '@mui/material';
import { About, Contact, Hero, Portfolio, Skills } from './page';
import { AppTheme } from './theme/AppTheme';
import { NavbarComponent } from './components/Navbar';
import { Education } from './page/Education';


function App() {
  return (

    <AppTheme>
      <Box sx={{ backgroundColor: '#f8f8f8', color: '#000' }}>
          <NavbarComponent />
        <Container className='container-mayor'>
          
          <Hero />
          <About />
          <Education />
          <Skills />
          <Portfolio />
        </Container>
          <Contact />
      </Box>
    </AppTheme>
    
  )
}

export default App

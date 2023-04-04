import { Container } from '@mui/material';
import { About, Contact, Hero, Navbar, Portfolio, Skills } from './page';
import { AppTheme } from './theme/AppTheme';


function App() {
  return (

    <AppTheme>
      <Container>
        <Navbar />
        
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Container>
    </AppTheme>
    
  )
}

export default App

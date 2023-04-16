import { useState } from 'react';
import { navItems } from '../helpers/navItems';
import { Hamburguer } from './Hamburguer';
import { Box } from '@mui/material';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

export const NavbarComponent = () => {

  const [openNav, setOpenNav] = useState(false);
  
  const handleClick = () => {
    setOpenNav(!openNav)
  }

  return (
  <>
        {/* <Box sx={{ position: 'sticky', left: 0, top: 0, zIndex: '999' }}>     
            <nav className='navbar'>
              <div className='title'>
                <h2>Carrizo Walter Daniel</h2>
              </div>
              <div className={`links ${openNav ? 'active' : ''}`}>
                  {
                    navItems.map((item) => ( 
                      
                        <a href={item.url}>
                          {item.title}
                        </a>
                      ))
                   }
              </div>
              <div className='burguer'>
                <Hamburguer openNav={openNav} handleClick={handleClick} />
              </div>
              <div className={`initial ${openNav ? 'active' : ''}`}>
              </div>

            </nav>
        </Box> */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
          <Container>
            <Navbar.Brand href="#home">Carrizo Walter Daniel</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              
              <Nav className='ms-auto'>
                <Nav.Link eventKey={2} href="#about">
                  Acerca de
                </Nav.Link>
                <Nav.Link  href="#education">
                  Educación
                </Nav.Link>
                <Nav.Link href="#projects">
                  Proyectos
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  </>
  )
}



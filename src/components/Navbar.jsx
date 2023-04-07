import { useState } from 'react';
import { navItems } from '../helpers/navItems';
import { Hamburguer } from './Hamburguer';
import { Box } from '@mui/material';

export const Navbar = () => {

  const [openNav, setOpenNav] = useState(false);
  
  const handleClick = () => {
    setOpenNav(!openNav)
  }

  return (
  <>
        <Box sx={{ position: 'sticky', left: 0, top: 0, zIndex: '999' }}>     
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
            </nav>
        </Box>
  </>
  )
}



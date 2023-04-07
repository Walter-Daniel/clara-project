import { useState } from 'react';
import { AppBar, Box, Button, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navItems } from '../helpers/navItems';
import { styled } from "@mui/material/styles";
import { DrawerComponent } from './Drawer';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [value, setValue] = useState('#about');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const SelectStyle = styled(Button)(({ theme }) => ({

    // color: "white",

    // "&:hover": {
    //   backgroundColor: "#efd703",
    //   color: '#000000'
    // },
    // "&.Mui-focused": {
    //   backgroundColor: "#efd703",
    //   color: '#000000'
    // },
    // "& .MuiButton-select": {
    //   backgroundColor: "#efd703",
    //   color: '#efd703'
    // }
  }));

  return (
  <>
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Walter Daniel Carrizo
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {
                        navItems.map((item) => (
                          <SelectStyle key={item.url}>
                            {/* <Button key={item.url} sx={{ color: '#ffffff' }} href={item.url} >
                              {item.title}
                            </Button> */}
                            <Tabs 
                                value={value} 
                                onChange={handleChange} 
                                textColor="secondary" 
                                indicatorColor="secondary"
                                sx={{ color: '#ffffff' }}
                                >
                              <Tab label={item.title} component="a" href={item.url} value={item.url} sx={{ color: "#ffffff" }}/>
                            </Tabs>
                          </SelectStyle>
                        ))
                    }
                </Box>
                </Toolbar>
            </AppBar>
        </Box>
    <DrawerComponent mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
  </>
  )
}



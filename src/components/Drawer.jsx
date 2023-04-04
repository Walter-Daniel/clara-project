import { useState } from 'react';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { navItems } from '../helpers/navItems';

const drawerWidth = 240;

export const DrawerComponent = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Walter Daniel Carrizo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.url} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={item.url} >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
                          <Button key={item.url} sx={{ color: '#fff' }} component="a" href={item.url}>
                              {item.title}
                          </Button>
                        ))
                    }
                </Box>
                </Toolbar>
            </AppBar>
        </Box>

        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
            </Drawer>
        </Box>

        
    </>
    

    
  )
}

DrawerComponent.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  

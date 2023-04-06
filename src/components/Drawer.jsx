import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { navItems } from '../helpers/navItems';

const drawerWidth = 240;

export const DrawerComponent = ({ handleDrawerToggle, mobileOpen }, props) => {

  const { window } = props;
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
  

import * as React from 'react';
import logoNavBar from './logoNavBar.png'
import Cart from '@mui/icons-material/LocalGroceryStoreOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar,Toolbar,Typography, Button,IconButton,List,Divider,Box,Drawer,CssBaseline} from '@mui/material';
import { Link } from 'react-router-dom';


const drawerWidth = 240;
const navItems = [
  { name: 'Procesadores', path: '/ProductCategory/cpu' },
  { name: 'Monitores', path: '/ProductCategory/monitor' },
  { name: 'Notebooks', path: '/ProductCategory/notebook' }
];

const DrawerAppBar = (props) => {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link to='/'>
        <img src={logoNavBar} alt="Logo" className="logo-image" />
      </Link>
      <Divider />
      <Box>
        {navItems.map((item) => (
          <List key={item.name}>
            <Button component={Link} to={item.path} sx={{ color: '#fff',fontSize: '0.85rem',textTransform: 'none'}}>
              {item.name}
            </Button>
          </List>
        ))}
      </Box>
      <Cart />
      <span>2</span>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: 'space-evenly' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '110px' }}>
            <Link to='/'>
              <img src={logoNavBar} alt="Logo" className="logo-image" />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, justifyContent: 'space-between' }}>
            {navItems.map((item) => (
              <Button key={item.name} component={Link} to={item.path} sx={{ color: '#fff',fontSize: '0.85rem', textTransform: 'none' }}>
                {item.name}
              </Button>
            ))}
            <Cart />
            <span>2</span>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1976d2' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;

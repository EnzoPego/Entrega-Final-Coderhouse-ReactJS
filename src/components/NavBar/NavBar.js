import * as React from 'react';
import logoNavBar from './logoNavBar.png'
import Cart from '@mui/icons-material/LocalGroceryStoreOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Typography, Button, IconButton, List, Divider, Box, Drawer, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom'; 
import { CartContext } from '../context/CartContext';

const drawerWidth = 240;
const navItems = [
  { name: 'Procesadores', path: '/ProductCategory/cpu' },
  { name: 'Monitores', path: '/ProductCategory/monitor' },
  { name: 'Notebooks', path: '/ProductCategory/notebook' }
];

const DrawerAppBar = (props) => {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { cartItems } = React.useContext(CartContext);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const uniqueCartItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(
      (cartItem) => cartItem.product === item.product
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);
  
  const totalQuantity = uniqueCartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link to='/'>
        <img src={logoNavBar} alt="Logo" className="logo-image" />
      </Link>
      <Divider />
      <Box>
        {navItems.map((item) => (
          <List key={item.name}>
            <Button component={Link} to={item.path} sx={{ color: '#fff', fontSize: '0.85rem', textTransform: 'none' }}>
              {item.name}
            </Button>
          </List>
        ))}
      </Box>
      <Link to='/Cart' style={{ textDecoration: 'none',color: 'white' }}>
        <Cart />
        <span>{totalQuantity}</span>
      </Link>
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
              <Button key={item.name} component={Link} to={item.path} sx={{ color: '#fff', fontSize: '0.85rem', textTransform: 'none' }}>
                {item.name}
              </Button>
            ))}
            <Link to='/Cart' style={{ textDecoration: 'none',color: 'white' }}>
              <Cart />
              <span>{totalQuantity}</span>
            </Link>
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

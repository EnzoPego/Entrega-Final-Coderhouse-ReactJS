import * as React from 'react';
import { Typography, useTheme, useMediaQuery,Snackbar} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { CartContext } from './context/CartContext';
import { useContext } from 'react';


const Details = ({ data }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { addToCart } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);

  const handleAddToCart = () => {
    addToCart(data);
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', maxWidth: 900, marginTop: '90px' }}>
      <img src={data.img} alt="imagen producto" style={{ width: '45%', display: 'block', margin: isSmallScreen ? 'auto' : 'initial', }} />
      <div style={{ flex: 1, padding: '5px', display: 'flex', flexDirection: 'column', }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          {data.product}
        </Typography>
        <Typography variant="h5" sx={{ color: '#FF8C00' }}>
          US$ {data.price}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '0.8rem', marginTop: '8px' }}
        >
          {data.description}
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '16px',
          }}
        >
          <button onClick={handleAddToCart} style={{backgroundColor: '#1976d2',color: 'white', padding: '16px 20px',margin: '8px 0', border: 'none', cursor: 'pointer',width: '70%',}} >  
            Añadir al Carrito
          </button>
        </div>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{ vertical:'top', horizontal:'right' }}>
          <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
            Producto agregado al carrito!
          </MuiAlert>
        </Snackbar>
      </div>
    </div>
    
  );
};

export default Details;

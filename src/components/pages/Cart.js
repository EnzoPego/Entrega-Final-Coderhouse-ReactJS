import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const getCartContents = () => {
    const contents = cartItems.reduce((acc, item) => {
      const existingItem = acc.find(
        (cartItem) => cartItem.product === item.product
      );
      if (existingItem) {
        existingItem.quantity = item.quantity;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    
    return contents;
  };

  const cartContents = getCartContents();

  const totalPrice = cartContents.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div>
        {cartContents.length > 0 ? (
          <List>
            {cartContents.map((item, index) => (
              <ListItem key={index}>
                <ListItemAvatar style={{margin:'20px'}}>
                  <Avatar
                    variant="square"
                    src={item.img}
                    alt={item.product}
                    sx={{ width: 80, height: 80 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  primary={item.product}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" sx={{ fontWeight: 'bold' }}>
                        Precio unitario:{' '}
                        <span style={{ fontWeight: 'bold' }}>US$ {item.price}</span>
                      </Typography>
                      {isSmallScreen && (
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                          <Button onClick={() => decreaseQuantity(item)} sx={{ fontSize: '1.5rem', minWidth: '30px', padding: '0px' }}>-</Button>
                          {item.quantity}
                          <Button onClick={() => increaseQuantity(item)} sx={{ fontSize: '1.2rem', minWidth: '30px', padding: '0px' }}>+</Button>
                          <IconButton onClick={() => handleRemoveFromCart(item)} sx={{ color: 'red', marginLeft: '8px' }}>
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      )}
                    </>
                  }
                  sx={{ marginLeft: '30px' }}
                />
                {!isSmallScreen && (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Button onClick={() => decreaseQuantity(item)} sx={{ fontSize: '1.5rem', minWidth: '30px', padding: '0px' }}>-</Button>
                      {item.quantity}
                      <Button onClick={() => increaseQuantity(item)} sx={{ fontSize: '1.2rem', minWidth: '30px', padding: '0px' }}>+</Button>
                    </div>
                    <IconButton onClick={() => handleRemoveFromCart(item)} sx={{ color: 'red' }}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                )}
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1">No hay productos en el carrito</Typography>
        )}
        {cartContents.length > 0 ? (
          <>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '60px' }}>
              Total: US$ {totalPrice.toFixed(2)}
            </Typography>
            <Link to={{ pathname: '/PayOrder', state: { cartContents, totalPrice } }}>
              <Button style={{ marginTop: '30px' }} type="submit" variant="contained" color="success" size="large">
                PROCEDER AL PAGO
              </Button>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;

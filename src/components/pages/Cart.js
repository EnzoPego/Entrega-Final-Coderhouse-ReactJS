import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, IconButton,Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const cartContents = cartItems.reduce((acc, item) => {
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

  const totalPrice = cartContents.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
 
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        {cartContents.length > 0 ? (
          <List>
            {cartContents.map((item, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
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
                    <Typography component="span" variant="body2" sx={{ fontWeight: 'bold' }}>
                      Precio unitario: <span style={{ fontWeight: 'bold' }}>US$ {item.price}</span> | Cantidad: {item.quantity}
                    </Typography>
                  }
                  sx={{ marginLeft: '30px' }}
                />
                <IconButton onClick={() => handleRemoveFromCart(item)} sx={{ color: 'red' }}>
                  <DeleteIcon />
                </IconButton>
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
              <Button  style={{ marginTop: '30px' }} type="submit" variant="contained" color="success" size="large">
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


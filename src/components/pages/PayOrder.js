import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Typography } from '@mui/material';
import Form from './Form';

const PayOrder = () => {
  const { cartItems } = useContext(CartContext);
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

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '60px' }}>
          El total de su compra es de: US$ {totalPrice.toFixed(2)}
        </Typography>
        <div>
          <Form/>
        </div>
      </div>
    </div> 
  );
};

export default PayOrder;
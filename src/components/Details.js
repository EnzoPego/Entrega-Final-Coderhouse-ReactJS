import * as React from 'react';
import { Typography,useTheme,useMediaQuery } from '@mui/material';

const Details = ({ data }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); 

  return (
    <div style={{
      display: 'flex',
      flexDirection: isSmallScreen ? 'column' : 'row',
      maxWidth: 900,
      marginTop: '90px',
    }}>
      <img src={data.img} alt="imagen producto" style={{ width: '45%', display: 'block', margin: isSmallScreen ? 'auto' : 'initial' }} />
      <div style={{ flex: 1, padding: '5px', display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          {data.product}
        </Typography>
        <Typography variant="h5" sx={{ color: '#FF8C00' }}>
          US$ {data.price}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '0.8rem', marginTop: '8px' }}>
          {data.description}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
          <button style={{ backgroundColor: '#1976d2', color: 'white', padding: '16px 20px', margin: '8px 0', border: 'none', cursor: 'pointer', width: '70%' }}>COMPRAR</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
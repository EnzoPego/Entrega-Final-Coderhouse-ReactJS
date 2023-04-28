import * as React from 'react';
import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';

const Cards = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 250, transition: "0.1s", "&:hover": { transform: "scale(1.05)" } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={data.img}
          alt="imagen producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: '1.05rem' }}>
            {data.product}
          </Typography>
          <Typography variant="h5" sx={{ color: '#FF8C00' }}>
            US$ {data.price}
          </Typography>
          <Typography >
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards;  
import * as React from 'react';

import { CardActionArea, Typography ,CardMedia ,CardContent,Card} from '@mui/material';
import img from '../CardProduct/CardImg/iphone-14.jpg'

const ProductList = ({data}) => {
  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.id}
          </Typography>
           {data.name}
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductList
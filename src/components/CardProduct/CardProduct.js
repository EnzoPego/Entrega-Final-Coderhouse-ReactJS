import * as React from 'react';
import { CardActionArea,Typography ,CardMedia,CardContent,Card} from '@mui/material';


const CardProduct = ({name,info,img}) => { 
  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt="imagen producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}    

export default CardProduct 
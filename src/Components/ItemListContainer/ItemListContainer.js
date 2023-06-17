//Componente que renderiza la tarjeta de cada producto que toma de la API en ItemListContainer

import * as React from "react";

//MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

//Estilos
import "./ItemListContainer.css";

const ItemListContainer = ({ product }) => {
  if (!product) {
    return null;
  }

  const { title, price, description, category, image, rating } = product;

  return (
    <div className="tarjetaProducto">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <div className="imagenProducto">
            <CardMedia component="img" image={image} alt={title} height={350} />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {price} | Category: {category} | Rating: {rating.rate}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn more
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemListContainer;

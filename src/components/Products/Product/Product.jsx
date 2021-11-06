import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <div>
      <Card
        className={classes.root}
        // increase size on hover
        classes={{ root: hover ? classes.cardHovered : '' }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <CardMedia
          className={classes.media}
          image={product.image.url}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h6">
              {product.price.formatted_with_code}
            </Typography>
          </div>
          <Typography
            // remove html tags from the description by rendering them as html elements
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="Add to Cart"
            // this way it knows to add only the item who's button you've clicked
            // add items oly 1 by 1
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;

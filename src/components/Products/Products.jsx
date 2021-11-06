import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running Shoes',
    price: '$40',
    image:
      'https://cdn.shopify.com/s/files/1/0046/5069/6817/products/EverydayAllBlack-3_4SideView-WithBG-WithShadow_1200x.jpg?v=1627328937',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple Macbook',
    price: '$600',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1632788573000',
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {/* xs={12} means full width on mobile. for small devices itll take 6 spaces instead of 12 etc*/}
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

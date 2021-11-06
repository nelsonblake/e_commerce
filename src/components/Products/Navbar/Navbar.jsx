import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart, Home } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../../assets/logo.png';

import useStyles from './styles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            variant="h5"
            className={classes.title}
            color="inherit"
            component={Link}
            to="/"
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            E Commerce Project
          </Typography>
          <div className={classes.grow} />
          {/* hide cart button when looking at the cart */}
          {location.pathname === '/' ? (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                {/* equal to number of items, this will come dynamicaly later */}
                <Badge badgeContent={totalItems} color="secondary">
                  {location.pathname === '/' ? <ShoppingCart /> : <Home />}
                </Badge>
              </IconButton>
            </div>
          ) : (
            // show home button when cart button is hidden
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/"
                aria-label="Show cart items"
                color="inherit"
              >
                {/* equal to number of items, this will come dynamicaly later */}
                <Badge badgeContent={totalItems} color="secondary">
                  <Home />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

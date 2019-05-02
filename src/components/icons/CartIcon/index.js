import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from "@material-ui/core/Button";
import {styles} from './style';
import Badge from "@material-ui/core/Badge";

function CartIcon({classes, handleLink, number}) {

  return (
    <div
      aria-label="Cart"
      className={classes.root}
      onClick={handleLink}>
      {
        number !== 0
          ? <Badge
              classes={{badge: classes.badge}}
              badgeContent={number}
              color="secondary">
              <Button
                color="inherit"
                className={classes.cart}>
                Cart
                <AddShoppingCartIcon/>
              </Button>
            </Badge>
          : <Button
              color="inherit"
              className={classes.cart}>
              Cart
              <AddShoppingCartIcon/>
            </Button>
      }
    </div>
  );
}

export default withStyles(styles)(CartIcon);

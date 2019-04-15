import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import AddShoppingCart from "../Icons/AddShoppingCart";
import FavoriteIc from "../Icons/Favorite";
import {NavLink} from "react-router-dom";

const styles = {
  media: {
    height: 100,
  },
};

function Minicart({classes}) {
  return (
    <Card>
      <CardContent>
        <NavLink to="/products/:product">
          <CardMedia
            className={classes.media}
            image="./products/img/couch-1835923_1920.jpg"
            title="Contemplative Reptile"
          />
          <Typography variant="h6" component="p">
            Name of product
          </Typography>
        </NavLink>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <FavoriteIc/>
        <AddShoppingCart/>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(Minicart);

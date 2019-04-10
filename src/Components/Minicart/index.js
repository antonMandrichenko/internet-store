import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import AddShoppingCart from "../Icons/AddShoppingCart";
import FavoriteIc from "../Icons/Favorite";
// import Icon from '@material-ui/core/Icon';

const styles = {
  media: {
    height: 100,
  },
};

function Minicart({classes}) {
  return (
    <Card>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <CardMedia
            className={classes.media}
            image="./img/couch-1835923_1920.jpg"
            title="Contemplative Reptile"
          />
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FavoriteIc/>
        <AddShoppingCart/>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(Minicart);

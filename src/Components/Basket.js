import React, {Fragment, useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from "react-router-dom";

function Basket({goodsInBasket, deleteGoodsInBasket}) {

  // useEffect(() => {
  //   if(goodsInBasket.length === 0) return;
  //   goodsInBasket.reduce((arrGoods, good) => {
  //     if()
  //   }, [])
  // });

  return (
    <Grid item xs={12} md={6}>
      <Link to={'/'}>Home</Link>
      {goodsInBasket.length !== 0
        ? <Fragment>
            <Typography variant="h6">
              Basket
            </Typography>
            <div>
              <List>
                {goodsInBasket.map((good) =>
                  <ListItem key={good.product.id + Math.random()*1000}>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={good.product.name}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete" onClick={deleteGoodsInBasket.bind(this, good.product.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>,
                )}
              </List>
            </div>
          </Fragment>
        : <Typography variant="h6">
            Basket is empty
          </Typography>
      }
    </Grid>
  );
}

export default Basket;

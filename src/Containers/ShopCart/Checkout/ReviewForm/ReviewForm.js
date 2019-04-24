import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { styles } from './style';

Review.propTypes = {
  classes: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  totalAmount: PropTypes.string.isRequired,
};

function Review(props) {
  const { classes, state, products, totalAmount } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={`Total: ${product.amount} thing(s)`} />
            <Typography variant="body2">${+product.price * +product.amount}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${totalAmount}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{state.userData.firstName} {state.userData.secondName}</Typography>
          <Typography gutterBottom>{state.userData.shippingAdress.address} {state.userData.shippingAdress.city} {state.userData.shippingAdress.state} {state.userData.shippingAdress.country} {state.userData.shippingAdress.zip}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
              <React.Fragment>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card type</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{state.userData.payment.cardName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card holder</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{state.userData.firstName} {state.userData.secondName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card number</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{state.userData.payment.cardNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Expiry date</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{state.userData.payment.expDate}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(Review);

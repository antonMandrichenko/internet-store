import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { compose } from "redux";
// import { connect } from "react-redux";
import { styles } from "./style";
// import { mapStateToProps, mapDispatchToProps } from "./redux";

CategoryList.propTypes = {
  classes: PropTypes.object.isRequired,
};

function CategoryList({classes}) {

  // const handleRedirect = () => {
  //   // history.goBack();
  // };
  //
  // const handleCheckout = () => {
  //   // history.push('/checkout');
  // };
  //
  // const handleDeleteFromCart = (id) => {
  //   // deleteFromCart(id);
  //   // totalAmount()
  // };

  return (
        <Fragment>
          <div className={classes.grid}>
            <DialogTitle id="responsive-dialog-title">{"Shop cart"}</DialogTitle>
            <Divider/>
            <Grid container className={classes.title}>
              <Grid item md={2}>
                <Typography variant="subtitle1" component="p" align="center">
                  <strong>Photo</strong>
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography variant="subtitle1" component="p" align="center">
                  <strong>About product</strong>
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="subtitle1" component="p" align="center">
                  <strong>Price</strong>
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="subtitle1" component="p" align="center">
                  <strong>Count</strong>
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="subtitle1" component="p" align="center">
                  <strong>Summary</strong>
                </Typography>
              </Grid>
            </Grid>
            <Divider className={classes.title}/>
            <Fragment>
            {[0, 1, 2, 3, 4, 5].map((product) =>
             <div key={product}>{product}product</div>)}
            </Fragment>
          </div>
        </Fragment>
  );
}

export default compose(
  withMobileDialog({breakpoint: 'sm'}),
  withStyles(styles),
  // connect(mapStateToProps, mapDispatchToProps)
)(CategoryList);

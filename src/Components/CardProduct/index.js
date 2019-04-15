import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarRates from "../StarsRate";
import TabsProduct from "./Tabs";

const styles = theme => ({
  grid: {
    width: '70%',
    margin: '0 auto',
    paddingBottom: '.5rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '0 .5rem',
      paddingBottom: '.5rem'
    },
  },

});

CardProduct.propTypes = {

};

function CardProduct({classes}) {
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Name of product
        </Typography>
        <StarRates/>
        <TabsProduct/>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(CardProduct);

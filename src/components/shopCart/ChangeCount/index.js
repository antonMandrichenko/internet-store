import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MobileChangeCount from "../MobileChangeCount";
import ChangeCountComp from "../ChangeCountComp";
import {styles} from "./style";

ChangeCount.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  addAmount: PropTypes.func.isRequired,
  reduceAmount: PropTypes.func.isRequired,
};

function ChangeCount({
                       classes,
                       product,
                       addAmount,
                       reduceAmount
                     }) {

  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleChangeCount = (id, e) => {

    const input = document.getElementById(`input${id}`);
    if (e.currentTarget.id === `minus${id}` && input.value > 1) {
      input.value = +input.value - 1;
      reduceAmount(product.id)
    }
    if (e.currentTarget.id === `plus${id}`) {
      input.value = +input.value + 1;
      addAmount(product.id)
    }
  };

  const handleClose = () => {
    setIsOpenDialog(!isOpenDialog);
  };

  return (
    <Grid container justify="center" alignItems="center">
      <div className={classes.changeInput}>
        <ChangeCountComp
          handleChangeCount={handleChangeCount}
          id={product.id}
          product={product}
        />
      </div>
      <div className={classes.showCountButton}>
        <IconButton
          size="small"
          onClick={handleClose}>
          {product.amount} thing(s).
        </IconButton>
        <MobileChangeCount
          isOpenDialog={isOpenDialog}
          handleClose={handleClose}
          id={product.id + '1'}
          handleChangeCount={handleChangeCount}
          product={product}
        />
      </div>
    </Grid>
  );
}

export default withStyles(styles)(ChangeCount);

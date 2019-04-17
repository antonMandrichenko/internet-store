import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { styles } from "./style";

ChangeCountComp.propTypes = {
  handleChangeCount: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

function ChangeCountComp({ handleChangeCount,
                           id,
                           classes,
                           product
}) {
  return (
    <Grid container justify="center" alignItems="center">
      <IconButton
        onClick={handleChangeCount.bind(null, id)}
        id={`minus${id}`}>
        <RemoveIcon/>
      </IconButton>
      <Input
        id={`input${id}`}
        value={product.amount}
        className={classes.input}
      />
      <IconButton
        onClick={handleChangeCount.bind(null, id)}
        id={`plus${id}`}>
        <AddIcon/>
      </IconButton>
    </Grid>
  );
}

export default withStyles(styles)(ChangeCountComp);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

ChangeCountComp.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  input: {
    width: '2rem',
    margin: '0 .2rem',
    [theme.breakpoints.down('md')]: {
      margin: 0,
    },
  },
});

function ChangeCountComp({handleChangeCount, id, classes}) {
  return (
    <Grid container justify="center" alignItems="center">
      <IconButton
        onClick={handleChangeCount.bind(null, id)}
        id={`minus${id}`}>
        <RemoveIcon/>
      </IconButton>
      <Input
        id={`input${id}`}
        defaultValue="1"
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

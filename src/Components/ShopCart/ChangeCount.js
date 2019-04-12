import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MobileChangeCount from "./MobileChangeCount";
import ChangeCountComp from "./ChangeCountComp";

ChangeCount.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  changeInput: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  showCountButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  }
});

function ChangeCount({classes, id}) {

  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleChangeCount = (id, e) => {
    const input = document.getElementById(`input${id}`);
    console.dir(e.currentTarget);
    if(e.currentTarget.id === `minus${id}` && input.value > 1) {
      input.value = +input.value - 1;
    }
    if(e.currentTarget.id === `plus${id}`) input.value = +input.value + 1;
  };

  const handleClose = () => {
    setIsOpenDialog(!isOpenDialog);
  };

  return (
    <Grid container justify="center" alignItems="center">
      <div className={classes.changeInput}>
        <ChangeCountComp handleChangeCount={handleChangeCount} id={id}/>
      </div>
      <div className={classes.showCountButton}>
        <IconButton size="small" onClick={handleClose}>
          1 шт.
        </IconButton>
        <MobileChangeCount
          isOpenDialog={isOpenDialog}
          handleClose={handleClose}
          id={id+'1'}
          handleChangeCount={handleChangeCount}
        />
      </div>
    </Grid>
  );
}

export default withStyles(styles)(ChangeCount);

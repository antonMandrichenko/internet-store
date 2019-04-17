import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { styles } from "./style";

Pagination.propTypes = {
  classes: PropTypes.object.isRequired,
};

function Pagination({classes}) {
  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary">
        1
      </Button>
      <Button variant="outlined" color="primary">
        2
      </Button>
      <Button variant="outlined" color="primary">
       3
      </Button>
    </div>
  );
}

export default withStyles(styles)(Pagination);

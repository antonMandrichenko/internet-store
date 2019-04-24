import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { styles } from "./style";

Pagination.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChangePage: PropTypes.any,
  index: PropTypes.any,
  currentPage: PropTypes.any,
};

function Pagination({
                      classes,
                      handleChangePage,
                      index,
                      currentPage
                    }) {
  return (
    <div className={classes.root}>
      {
        currentPage === index
          ? <Button
            variant="contained"
            color="primary"
            onClick={handleChangePage}>
            {index}
          </Button>
          : <Button
            variant="outlined"
            color="primary"
            onClick={handleChangePage}>
            {index}
          </Button>
      }
    </div>
  );
}

export default withStyles(styles)(Pagination);

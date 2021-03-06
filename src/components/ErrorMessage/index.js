import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import SnackbarContent from "@material-ui/core/SnackbarContent";
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from "@material-ui/core/Snackbar";
import {styles} from "./style";

ErrorMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpenMessage: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

function ErrorMessage({
                        classes,
                        isOpenMessage,
                        message,
                        handleClose
                      }) {

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isOpenMessage}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classNames(classes.error, classes.margin)}
        aria-describedby="client-snackbar"
        message={
          <span
            id="client-snackbar"
            className={classes.message}>
          <ErrorIcon
            className={classNames(classes.icon, classes.iconVariant)}
          />
            {message}
        </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon className={classes.icon}/>
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
}

export default withStyles(styles)(ErrorMessage);

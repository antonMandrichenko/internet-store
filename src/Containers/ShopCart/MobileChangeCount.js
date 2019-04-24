import React from 'react';
import PropTypes from 'prop-types';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import ChangeCountComp from "./ChangeCountComp";

MobileChangeCount.propTypes = {
  isOpenDialog: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  handleChangeCount: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

function MobileChangeCount({ isOpenDialog,
                             handleClose,
                             id,
                             handleChangeCount,
                             product
}) {
  return (
    <Dialog
      fullWidth
      open={isOpenDialog}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogContent>
        <ChangeCountComp
          id={id}
          handleChangeCount={handleChangeCount}
          product={product}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MobileChangeCount;

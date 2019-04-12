import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import ChangeCountComp from "./ChangeCountComp";

MobileChangeCount.propTypes = {

};

function MobileChangeCount({ isOpenDialog,
                             handleClose,
                             id,
                             handleChangeCount
}) {

  return (
    <Dialog
      fullWidth="true"
      open={isOpenDialog}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogContent>
        <ChangeCountComp
          id={id}
          handleChangeCount={handleChangeCount}
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

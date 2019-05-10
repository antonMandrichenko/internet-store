import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './style';
import SquearChoise from "../SquearChoise";
import Paper from "@material-ui/core/Paper";
import InnerPriceChoise from "../InnerPriceChoise";

AviableButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

function AviableButton({classes}) {

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    console.dir(e.clientX)
    if(e.target.id === "AviableButton")
    setIsOpen(!isOpen);
  };

  return (
    <Paper
      id="AviableButton"
      className={classes.root}
      onClick={handleChange}>
      <SquearChoise
        isOpen={isOpen}
      >
        <InnerPriceChoise/>
      </SquearChoise>
    </Paper>
  );
}

export default withStyles(styles)(AviableButton);

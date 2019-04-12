import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";

Logout.propTypes = {

};

function Logout({handleClick}) {
  return (
    <Button color="inherit" onClick={handleClick}>Logout</Button>
  );
}

export default Logout;

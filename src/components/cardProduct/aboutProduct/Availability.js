import React from 'react';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

Availability.propTypes = {
  status: PropTypes.string.isRequired,
};

function Availability({status}) {
  return (
    <CardContent>
      {
        status === 'aviable'
          ? <Typography
            variant="h5"
            gutterBottom
            color="primary">
            <i className="material-icons">
              check
            </i> In store
          </Typography>
          : <Typography
            variant="h5"
            gutterBottom
            color="secondary">
            <i className="material-icons">
              remove_shopping_cart
            </i> No in store
          </Typography>
      }
    </CardContent>
  );
}

export default Availability;

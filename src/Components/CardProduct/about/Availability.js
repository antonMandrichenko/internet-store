import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

function Availability() {
  return (
    <CardContent>
      <Typography variant="h5" gutterBottom color="primary">
        <i className="material-icons">
          check
        </i>  In store
      </Typography>
    </CardContent>
  );
}

export default Availability;

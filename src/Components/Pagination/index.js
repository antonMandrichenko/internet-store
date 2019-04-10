import React, {Fragment} from 'react';
import Button from "@material-ui/core/Button";

function Pagination() {
  return (
    <Fragment>
      <Button variant="outlined" color="primary">
        1
      </Button>
      <Button variant="outlined" color="primary">
        2
      </Button>
      <Button variant="outlined" color="primary">
       3
      </Button>
    </Fragment>

  );
}

export default Pagination;

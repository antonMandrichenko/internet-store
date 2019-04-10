import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  link: {
    margin: theme.spacing.unit,
    textAlign: 'center'
  },
});


CreditItem.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

function CreditItem({title, classes}) {
  return (
    <Typography className={classes.link}>
      <Link href={'#'} variant="body1" >
        {title}
      </Link>
    </Typography>
  );
}

export default withStyles(styles)(CreditItem);

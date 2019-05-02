import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {styles} from './style';

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const footers = [
  {
    title: 'Contacts',
    description: ['Email: admin@gmail.com', 'Tel.: +38-098-516-04-36'],
  },
  {
    title: 'Socials',
    description: ['Facebook', 'Tweeter', 'Instagram'],
  },
  {
    title: 'All rights reserved',
    description: ['XXXXX(c)', '2019'],
  },
];

function Footer({classes}) {
  return (
    <footer
      className={classNames(classes.footer, classes.layout)}>
      <Grid
        container
        spacing={32}
        justify="space-evenly">
        {
          footers.map(footer => (
            <Grid
              item
              xs
              key={footer.title}>
              <Typography
                variant="h6"
                color="textPrimary"
                gutterBottom>
                {footer.title}
              </Typography>
              {
                footer.description.map(item => (
                  <Typography
                    key={item}
                    variant="subtitle1"
                    color="textSecondary">
                    {item}
                  </Typography>
                ))
              }
            </Grid>
          ))
        }
      </Grid>
    </footer>
  );
}

export default withStyles(styles)(Footer);

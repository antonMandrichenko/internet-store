import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

const styles = theme => ({
  subHeader: {
    fontSize: '1rem',
  },
});

function PersonalData({classes}) {
  return (
    <List component="nav">
      <ListSubheader component="div" className={classes.subHeader} color="primary">Customer</ListSubheader>
      <ListItem button>
        <ListItemText secondary="Personal data" />
      </ListItem>
      <ListItem button>
        <ListItemText secondary="Wish list" />
      </ListItem>
      <ListItem button>
        <ListItemText secondary="Basket" />
      </ListItem>
      <ListItem button>
        <ListItemText secondary="My rewiews" />
      </ListItem>

    </List>
  );
}

export default withStyles(styles)(PersonalData);

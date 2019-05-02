import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import {styles} from "./style";

MenuPersonalData.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function MenuPersonalData({classes, history}) {

  const handleLinkPersonal = () => {
    history.push("/personalData")
  };

  const handleLinkCart = () => {
    history.push("/shopcart")
  };

  return (
    <List
      component="nav"
      className={classes.root}>
      <ListSubheader
        component="div"
        className={classes.subHeader}
        color="primary">
        Customer
      </ListSubheader>
      <ListItem button>
        <ListItemText
          secondary="Personal data"
          onClick={handleLinkPersonal}
        />
      </ListItem>
      <ListItem button>
        <ListItemText
          secondary="My cart"
          onClick={handleLinkCart}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(styles)(withRouter(MenuPersonalData));

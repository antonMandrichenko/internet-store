import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import {Link} from "react-router-dom";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Drawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes, goodsInBasket } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Basket'].map((text) => (
            <Link to='/basket' style={{textDecoration: 'none'}} key={text}>
            <ListItem
              button
            >
              <Badge
                badgeContent={goodsInBasket.length}
                color="primary"
                classes={{ badge: classes.badge }}
              >
                <i className="material-icons">
                  shopping_cart
                </i>
              </Badge>

                <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Menu</Button>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drawer);

import React from 'react';
import PropTypes from 'prop-types';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

MobileMenuDrawer.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  isOpenMenu: PropTypes.bool.isRequired,

};

function MobileMenuDrawer({handleOpenMenu, isOpenMenu}) {
  const sideList = (
    <div>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Drawer open={isOpenMenu} onClose={handleOpenMenu}>
      <div
        tabIndex={0}
        role="button"
        onClick={handleOpenMenu}
        onKeyDown={handleOpenMenu}
      >
        {sideList}
      </div>
    </Drawer>
  );
}

export default MobileMenuDrawer;

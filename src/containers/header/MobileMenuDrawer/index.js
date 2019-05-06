import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {mapStateToProps, mapDispatchToProps} from "./redux";
import {sortArrayByName} from '../../../utils/sortArray';
import CircularIndeterminate from "../../../components/Circular";
import Logo from "../../../components/Logo";
import {styles} from './style';
import Logout from "../../../components/header/Logout";
import Login from "../../../components/header/Login";

MobileMenuDrawer.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  isOpenMenu: PropTypes.bool.isRequired,
  categories: PropTypes.any,
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  getCurrentCategory: PropTypes.func.isRequired,
  user: PropTypes.object,
  users: PropTypes.any,
  auth: PropTypes.any,
};

function MobileMenuDrawer({
                            handleOpenMenu,
                            isOpenMenu,
                            categories,
                            history,
                            getCurrentCategory,
                            classes,
                            signOutSubmit,
                            user,
                            users,
                            auth
                          }) {

  const [sortCategories, setSortCategories] = useState([]);

  const handleLink = (e) => {
    getCurrentCategory(e.target.innerHTML);
    history.push(`/${e.target.innerHTML}/products`);
  };

  useEffect(() => {
    setSortCategories(categories
      ? categories.sort(sortArrayByName)
      : sortCategories)
  }, [categories]);

  const sideList = (
    <div>
      <List>
        {categories
          ? sortCategories.map((item) =>
            <ListItem button key={item.id} onClick={handleLink}>
              <ListItemText
                primary={item.name}
              />
            </ListItem>
          )
          : <CircularIndeterminate/>
        }
      </List>
    </div>
  );
  return (
    <Drawer
      open={isOpenMenu}
      onClose={handleOpenMenu}>
      <div
        tabIndex={0}
        role="button"
        onClick={handleOpenMenu}
        onKeyDown={handleOpenMenu}
        className={classes.root}
      >
        <Logo/>
        {users && user && auth
          ? auth.uid
            ? <Logout
              signOutSubmit={signOutSubmit}
              user={user}
            />
            : <Login/>
          : <CircularIndeterminate
            size={'small'}
            color={'white'}
          />
        }
        {sideList}
      </div>
    </Drawer>
  );
}

export default compose(
  withRouter,
  firestoreConnect([
    {collection: 'categories'}
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(MobileMenuDrawer);


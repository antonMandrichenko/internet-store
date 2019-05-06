import React, {useState} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from "react-router-dom";
import {firestoreConnect, withFirebase} from "react-redux-firebase";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Menu from '../../../components/header/Menu';
import Login from "../../../components/header/Login";
import Logout from "../../../components/header/Logout";
import MobileMenuDrawer from "../MobileMenuDrawer";
import CartIcon from "../../../components/icons/CartIcon";
import DashboardButton from "../../../components/header/DashboardButton";
import {styles} from "./style";
import {mapStateToProps, mapDispatchToProps} from "./redux";
import CircularIndeterminate from "../../../components/Circular";
import Logo from "../../../components/Logo";

DashboardButton.propTypes = {
  signOutSubmit: PropTypes.func,
  classes: PropTypes.object.isRequired,
  auth: PropTypes.any,
  noCurrentCategory: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  users: PropTypes.any.isRequired,
  productsInCart: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
};

function Header({
                  classes,
                  signOutSubmit,
                  auth,
                  noCurrentCategory,
                  history,
                  users,
                  productsInCart,
                  currentUser
                }) {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleLink = (e) => {
    if (e.target.innerHTML === 'Dashboard') {
      history.push("/dashboard")
    } else {
      history.push("/shopcart")
    }
  };

  const handleChange = () => {
    noCurrentCategory();
  };

  return (
    <div className={classes.root}>

      <AppBar
        position="static"
        color="primary"
        className={classes.appBar}>
        <Toolbar
          variant="dense"
          className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="Menu"
            className={classes.mobileMenu}
            onClick={handleOpenMenu}>
            <MenuIcon/>
          </IconButton>
          <MobileMenuDrawer
            isOpenMenu={isOpenMenu}
            handleOpenMenu={handleOpenMenu}
            signOutSubmit={signOutSubmit}
            user={currentUser}
          />
          <Grid container>
            <Grid
              item
              lg={1}
              md={2}
              className={classes.menuTitle}>
              <Logo handleChange={handleChange}/>
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={8}
              >
              <Menu/>
            </Grid>
            <Grid
              item
              lg={3}
              md={4}
              xs={4}
              className={classes.menuButton}>
              <CartIcon
                handleLink={handleLink}
                number={productsInCart.length}
              />
              <div className={classes.log}>
              {users && currentUser
                ? auth.uid
                  ? <Logout
                    signOutSubmit={signOutSubmit}
                    user={currentUser}
                  />
                  : <Login/>
                : <CircularIndeterminate
                  size={'small'}
                  color={'white'}
                />
              }
              </div>
              {
                auth.uid === 'jB5do8VhklX0qFsgDqy28p3eUOr1'
                  ? <DashboardButton handleLink={handleLink}/>
                  : null
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default compose(
  withRouter,
  withFirebase,
  firestoreConnect([
    {collection: 'users'}
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Header);

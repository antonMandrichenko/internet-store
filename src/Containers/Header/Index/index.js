import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Menu from '../Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Login from "../Login";
import Logout from "../Logout";
import {NavLink, withRouter} from "react-router-dom";
import { withFirebase } from "react-redux-firebase";
import MobileMenuDrawer from "../MobileMenuDrawer";
import Link from "@material-ui/core/Link";
import DashboardButton from "../DashboardButton";
import { styles } from "./style";
import { mapStateToProps, mapDispatchToProps } from "./redux";

function Header({classes, signOutSubmit, auth, noCurrentCategory, history}) {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleOut = () => {
    console.log('signout')
  };

  const handleChange = () => {
    noCurrentCategory();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar variant="dense" style={{}} className={classes.toolBar}>
          <IconButton color="inherit" aria-label="Menu" className={classes.mobileMenu} onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
          <MobileMenuDrawer isOpenMenu={isOpenMenu} handleOpenMenu={handleOpenMenu}/>
          <Grid container>
            <Grid item lg={1} className={classes.menuTitle}>
              <Link  color="textPrimary" underline="none" component={NavLink} to="/" onClick={handleChange}>
                <Typography variant="h6" color="inherit">
                  News
                </Typography>
              </Link>
            </Grid>
            <Grid item lg={8} xs={8} md={9}>
              <Menu/>
            </Grid>
            <Grid item lg={3} xs={4} md={3} className={classes.menuButton}>
              <Link  color="textPrimary" underline="none" component={NavLink} to="/shopcart" >
                <Button color="inherit" className={classes.cart}>
                  Cart
                  <AddShoppingCartIcon/>
                </Button>
              </Link>
              {
                auth.uid
                  ? <Logout signOutSubmit={signOutSubmit}/>
                  : <Login/>
              }
              {
                auth.uid === '32iPDzNJKgbmPSMmKA6XuUeSGhD3'
                  ? <Link  color="textPrimary" underline="none" component={NavLink} to="/dashboard">
                      <DashboardButton/>
                    </Link>
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
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Header);

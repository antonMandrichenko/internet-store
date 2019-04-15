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
import Menu from './Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Login from "./Login";
import Logout from "./Logout";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { withFirebase } from "react-redux-firebase";
import MobileMenuDrawer from "./MobileMenuDrawer";
import Link from "@material-ui/core/Link";


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    marginBottom: '.5rem'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 10,
  },
  menuButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  menuTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  avatar: {
    margin: 10,
    width: 30,
    height: 30,
  },
  mobileMenu: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    }
  },
  toolBar: {
    width: '70%',
    margin: '0 auto',
    padding: 0,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    }
  },
  navLink: {
    color: theme.palette.common.white,
  },
});

function Header({classes, signOutSubmit, auth}) {

  // const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleOut = () => {
    console.log('signout')
  };

  // const handleOpenCart = () => {
  //   setIsOpenCart(!isOpenCart);
  // };

  // const handleClose = () => {
  //   setIsOpenCart(false);
  // };

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
              <Link  color="textPrimary" underline="none" component={NavLink} to="/">
                <Typography variant="h6" color="inherit">
                  News
                </Typography>
              </Link>
            </Grid>
            <Grid item lg={8} xs={8} md={9}>
              <Menu/>
            </Grid>
            <Grid item lg={3} xs={4} md={3} className={classes.menuButton}>
              <Link  color="textPrimary" underline="none" component={NavLink} to="/shopcart">
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
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>

  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps, dispatch);
  return {
    signOutSubmit: () => dispatch(signOut(dispatch, ownProps))
  }
};

export default compose(
  withFirebase,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Header);

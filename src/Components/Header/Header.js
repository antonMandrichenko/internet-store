import React, {useState} from 'react';
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
import Avatar from "@material-ui/core/Avatar";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShopCart from "../ShopCart";
import Login from "./Login";
import Logout from "./Logout";


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
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
    alignItems: 'center'
  },
  avatar: {
    margin: 10,
    width: 30,
    height: 30,
  },
});

function Header({classes}) {

  const [pos, setPos] = useState(null);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleClick = () => {
    console.log('ghghghgh')
  };

  const handleOpenCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  // const handleClose = () => {
  //   setIsOpenCart(false);
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar variant="dense" style={{width: '70%', margin: '0 auto', padding: 0}}>
          {pos
            ? <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            : null
          }
          <Grid container>
            <Grid item xs={1} className={classes.menuTitle}>
              <Typography variant="h6" color="inherit">
                News
              </Typography>
            </Grid>
            <Grid item xs={9} >
              <Menu/>
            </Grid>
            <Grid item xs={2} className={classes.menuButton}>
              <Button color="inherit" onClick={handleOpenCart}>Cart<AddShoppingCartIcon/></Button>
              <Login handleClick={handleClick}/>
              <Logout handleClick={handleClick}/>
              <Avatar alt="Remy Sharp" src="./img/avatar.jpg" className={classes.avatar} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <ShopCart isOpenCart={isOpenCart} handleOpenCart={handleOpenCart}/>
    </div>

  );
}

const mapStateToProps = state => {
  return {

  }
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Header);

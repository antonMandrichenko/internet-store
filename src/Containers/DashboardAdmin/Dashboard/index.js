import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { styles } from './style';
import Menu  from './nodes';
import { routes } from './routesDashboard';

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function Dashboard ({ classes,
                      theme,
                      history
}) {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenuCategories, setIsOpenMenuCategories] = useState(false);
  const [isOpenMenuProducts, setIsOpenMenuProducts] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleClick = (text) => {
    if(text === 'Categories')
      setIsOpenMenuCategories(!isOpenMenuCategories);
    if(text === 'Products')
      setIsOpenMenuProducts(!isOpenMenuProducts);
  };

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: isOpen,
        })}
      >
        <Toolbar disableGutters={!isOpen}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, isOpen && classes.hide)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Dashboard of online store
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr'
              ? <ChevronLeftIcon/>
              : <ChevronRightIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          {['Categories',
            'Products',
            'Sales',
            'Reviews',
            'In store'
          ].map((text, index) => (
            text === 'Categories'
              ? <Menu
                  key={text}
                  text={text}
                  isOpen={isOpenMenuCategories}
                  subcategories={['List', 'Create']}
                  handleClick={handleClick}
                  history={history}
                  index={index}
                  handleSelect={handleSelect}
                  selectedIndex={selectedIndex}
                />
              : text === 'Products'
                ? <Menu
                    key={text}
                    text={text}
                    isOpen={isOpenMenuProducts}
                    subcategories={['List', 'Create']}
                    handleClick={handleClick}
                    history={history}
                    index={index}
                    handleSelect={handleSelect}
                    selectedIndex={selectedIndex}
              />
                : text === 'Sales'
                  ? <Menu
                      key={text}
                      text={text}
                      noCollapse={'noCollapse'}
                      handleClick={handleClick}
                      history={history}
                      index={index}
                      handleSelect={handleSelect}
                      selectedIndex={selectedIndex}
                />
                  : <Menu
                      key={text}
                      text={text}
                      noCollapse={'noCollapse'}
                      handleClick={handleClick}
                      history={history}
                      index={index}
                      handleSelect={handleSelect}
                      selectedIndex={selectedIndex}
                />
          ))}
        </List>
      </Drawer>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: isOpen,
        })}
      >
        <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
        </Switch>
      </main>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Dashboard);

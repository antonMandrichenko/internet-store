export const styles = theme => ({
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
  log: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  menuTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
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

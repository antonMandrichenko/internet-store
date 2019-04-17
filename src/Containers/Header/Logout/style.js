export const styles = theme => ({
  root: {
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
});

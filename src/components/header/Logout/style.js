export const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  avatar: {
    backgroundColor: '#42a5f5',
    margin: 10,
    width: 30,
    height: 30,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
});

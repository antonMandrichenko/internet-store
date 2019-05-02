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
    backgroundColor: '#42a5f5',
    margin: 10,
    width: 30,
    height: 30,
  },
});

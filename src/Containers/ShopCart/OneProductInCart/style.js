export const styles = theme => ({
  subtitle1: {
    fontSize: '.7rem'
  },
  image: {
    width: '80%',
  },
  dialog: {
    padding: '1rem'
  },
  first: {
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
  second: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
      display: 'flex',
      justifyContent: 'center',
      width: 10
    },
  },
  third: {
    [theme.breakpoints.down('sm')]: {
      order: 3,
      display: 'flex',
      justifyContent: 'center',
      marginTop: '1rem'
    },
  }
});

export const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 1,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
    },
  },
  subtitle1: {
    fontSize: '.7rem'
  },
  image: {
    height: 60,
  },
  dialog: {
    padding: '1rem',
    backgroundColor: '#f5f5f5'
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
  },
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down(1200 + theme.spacing.unit * 3 * 2)]: {
      justifyContent: 'flex-start',
    },
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

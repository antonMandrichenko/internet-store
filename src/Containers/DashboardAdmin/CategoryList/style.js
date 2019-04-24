export const styles = theme => ({
  paper: {
    width: '60%',
    margin: '0 auto',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 1,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  grid: {
    width: '90%',
    margin: '0 auto',
    paddingBottom: '.5rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '0 .5rem',
      paddingBottom: '.5rem'
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

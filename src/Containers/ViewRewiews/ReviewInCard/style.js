export const styles = theme => ({
  typogr: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem'
  },
  dateGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      order: -1,
    }
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
});

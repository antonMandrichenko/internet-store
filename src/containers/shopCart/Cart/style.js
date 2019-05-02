export const styles = theme => ({
  title: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  grid: {
    width: '70%',
    margin: '0 auto',
    padding: '.5rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '0 .5rem',
      paddingBottom: '.5rem'
    },
  }
});

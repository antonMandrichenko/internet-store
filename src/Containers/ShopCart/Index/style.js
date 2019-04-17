export const styles = theme => ({
  title: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  grid: {
    width: '70%',
    margin: '0 auto',
    paddingBottom: '.5rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '0 .5rem',
      paddingBottom: '.5rem'
    },
  }
});

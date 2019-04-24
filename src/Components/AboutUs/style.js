export const styles = theme => ({
  grid: {
    width: '70%',
    margin: '0 auto',
    paddingBottom: '.5rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '0 .5rem',
      paddingBottom: '.5rem'
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  title: {
    margin: '1rem 0'
  }
});

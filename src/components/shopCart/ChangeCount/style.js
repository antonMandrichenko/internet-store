export const styles = theme => ({
  changeInput: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  showCountButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  }
});

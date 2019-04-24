export const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 1,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
    },
  },
  table: {
    minWidth: 700,
  },
});

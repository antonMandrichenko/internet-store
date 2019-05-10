export const styles = theme => ({
  textField: {
    margin: 0,
    // marginRight: theme.spacing.unit,
    height: '2rem',
    width: '100%',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '90%',
    height: '.4rem',
    // backgroundColor: theme.palette.primary.main,
    borderRadius: '.5rem',
    position: 'relative',
  },
  colorLine: {
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    width: '100%',
    height: 'inherit',
    top: 0,
    left: 0,
  },
  lineBox: {
    height: 40,
  }
});

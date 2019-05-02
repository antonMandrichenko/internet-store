const heightImg = 100;

export const styles = theme => ({
  borderDiv: {
    height: heightImg + 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      margin: '.3rem',
    },
  },
  image: {
    height: heightImg,

  },
  borderImg: {
    padding: 5,
    border: '1px solid rgba(73, 164, 61, 1)',
  }
});

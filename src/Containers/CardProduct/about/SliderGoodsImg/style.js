export const styles = theme => ({
  swiper2: {
    width: '90%',
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: 'inherit',
      height: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  swiper2Slide: {
    textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageMain: {
    width: '100%',
  },
  smallImg: {
    [theme.breakpoints.down('md')]: {
      order: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
  },
  bigImg: {
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  },
  root: {
    [theme.breakpoints.down('md')]: {
      paddingRight: '.4rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  }
});

export const styles = theme => ({
  swiper1: {
    width: '100%',
    height: '500px',
    marginBottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  },
  'swiper-slide': {
    textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageMain: {
    width: '100%',
  }
});

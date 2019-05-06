export const styles = theme => ({
  swiper1: {
    width: '100%',
    height: 'auto',
    marginBottom: '2rem',
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

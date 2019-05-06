export const styles = theme => ({
  root: {
    height: '100%',
    position: 'relative',
    border: '1px solid grey',
    transition: 'height .3s, box-shadow .3s, top .5s,',
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        position: 'absolute',
        top: '-5%',
        height: '110%',
        width: 'inherit',
        zIndex: 200,
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      }
    }
  },
  media: {
    height: 150,
  },
  price: {
    display: 'inline-block',
    padding: '.2rem .5rem',
    borderRadius: 5,
    backgroundColor: '#ffee58'
  },
  button: {
    position: 'absolute',
    bottom: '.5rem',
    margin: 'auto',
    right: 0,
    left: 0,
  }
});

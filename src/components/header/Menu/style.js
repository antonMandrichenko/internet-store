export const styles = theme => ({
  goodsButton: {
    background: '#366438',
  },
  menu: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  }
});

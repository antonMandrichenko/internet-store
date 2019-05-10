const heightBox = 80;

export const styles = () => ({
  innerBlock: {
    position: 'absolute',
    bottom: -heightBox - 5,
    left: -1,
    width: '15rem',
    height: heightBox,
    padding: '.5rem',
    // backgroundColor: 'red',
    zIndex: 200,
  },
  innerBlockClose: {
    display: 'none',
  }
});

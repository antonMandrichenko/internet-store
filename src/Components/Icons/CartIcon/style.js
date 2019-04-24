export const styles = (theme) => ({
  root: {
    // width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  badge: {
    top: '50%',
    right: '110%',
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
  },
});

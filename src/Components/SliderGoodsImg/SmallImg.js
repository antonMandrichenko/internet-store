import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia";

const heightImg = 100;

const styles = theme => ({
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

function SmallImg({ind, activeIndexImg, changeImgHandle, src, classes}) {

  return (
    <div className={classes.borderDiv} onClick={changeImgHandle.bind(this, ind)}>
      <CardMedia
        color="primary"
        className={`${classes.image} ${ind === activeIndexImg
          ? classes.borderImg
          : null}`}
        component="img"
        alt="Contemplative Reptile"
        width='50%'
        image={src}
        title="Contemplative Reptile"
      />
    </div>
  );
}

export default withStyles(styles)(SmallImg);

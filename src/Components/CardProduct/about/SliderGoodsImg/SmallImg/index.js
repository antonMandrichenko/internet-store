import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia";
import { styles } from "./style";
import PropTypes from "prop-types";

SmallImg.propTypes = {
  ind: PropTypes.number.isRequired,
  activeIndexImg: PropTypes.number.isRequired,
  changeImgHandle: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

function SmallImg({ ind,
                    activeIndexImg,
                    changeImgHandle,
                    src,
                    classes
}) {
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

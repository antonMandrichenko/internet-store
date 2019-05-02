import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia";
import {styles} from "./style";


SmallImg.propTypes = {
  ind: PropTypes.number.isRequired,
  activeIndexImg: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

function SmallImg({
                    ind,
                    activeIndexImg,
                    src,
                    classes
                  }) {
  return (
    <div
      className={classes.borderDiv}>
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

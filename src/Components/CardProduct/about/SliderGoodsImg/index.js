import React, {useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import Grid from "@material-ui/core/Grid";
import SmallImg from "./SmallImg";
import { styles } from "./style";
import PropTypes from 'prop-types';

SliderGoodsImg.propTypes = {
  classes: PropTypes.object.isRequired,
  img: PropTypes.object.isRequired,
};

function SliderGoodsImg({classes, img}) {
  const [slides] = useState([
    img.first,
    img.second,
    img.third,
    img.fourth,
  ]);
  const [virtualData, setVirtualData] = useState({slides: []});
  const [swipe, setSwipe] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const myswiper = new Swiper('#swiper2', {
      initialSlide: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      centeredSlides: true,

      virtual: {
        slides: slides,
        renderExternal(data) {
          setVirtualData(data);
        },
      },
    });
    setSwipe(myswiper);
  }, []);

  const changeImgHandle = () => {
    // setActiveIndex(index);
  };

  const changeIndexSlider = (index) => {
    setActiveIndex(index);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item lg={2} xs={12} md={12} className={classes.smallImg}>
      {slides.map((img, ind) =>
          <SmallImg
            key={ind*100*Math.random()}
            src={slides[ind]}
            ind={ind}
            activeIndexImg={activeIndex}
            changeImgHandle={changeImgHandle}
          />
      )}
      </Grid>
      <Grid item lg={10} xs={12} md={12} className={classes.bigImg}>
        <div >
          <div className={`swiper-container ${classes.swiper2}`} id="swiper2">
            <div className="swiper-wrapper" >
              {virtualData.slides.map((slide, index) => (
                <div className= {`swiper-slide ${classes.swiper2Slide}`}
                     key={index}
                     style={{left: `${virtualData.offset}px`}}
                >
                     <img src={slide}
                          alt={slide}
                          className={classes.imageMain}
                     />
                 </div>
              ))}
            </div>
            <div className="swiper-button-next"
                 onClick={changeIndexSlider.bind(this, swipe.activeIndex)}>
            </div>
            <div className="swiper-button-prev"
                 onClick={changeIndexSlider.bind(this, swipe.activeIndex)}>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SliderGoodsImg);

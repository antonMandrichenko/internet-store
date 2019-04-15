import React, {useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import Grid from "@material-ui/core/Grid";
import SmallImg from "./SmallImg";

const styles = theme => ({
  swiper2: {
    width: '90%',
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: 'inherit',
      height: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    // border: '1px solid black',
  },
  swiper2Slide: {
    textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageMain: {
    width: '100%',
  },
  smallImg: {
    [theme.breakpoints.down('md')]: {
      order: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
  },
  bigImg: {
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  },
  root: {
    [theme.breakpoints.down('md')]: {
      paddingRight: '.4rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  }
});

function SliderGoodsImg({classes}) {
  const [slides, setSlides] = useState([
    './img/avatar.jpg',
    './img/couch-1835923_1920.jpg',
    './img/phone-4060860_1920.jpg',
    './img/wall-416060_1280.jpg'
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
            key={img}
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

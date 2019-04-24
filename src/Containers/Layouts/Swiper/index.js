import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import { styles } from "./style";

SwiperRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

function SwiperRow({classes}) {

  const img = (src) => {
    return <img src={src} alt={src} className={classes.imageMain}/>
  };

  let _isMounted = false;
  const [slides] = useState([
    img('https://firebasestorage.googleapis.com/v0/b/internet-store-62659.appspot.com/o/ecommerce-2140603_1920.jpg?alt=media&token=1b89c3ca-b1ac-44c0-aaf4-5d17381c0473'),
    img('https://firebasestorage.googleapis.com/v0/b/internet-store-62659.appspot.com/o/ecommerce-2140604_1920.jpg?alt=media&token=85df3dd3-b8e5-443c-8cf3-50464a22907d'),
    img('https://firebasestorage.googleapis.com/v0/b/internet-store-62659.appspot.com/o/ecommerce-3563183_1920.jpg?alt=media&token=66ce60b4-8ec2-4d91-8bcd-8a299d642cbf'),
  img('https://firebasestorage.googleapis.com/v0/b/internet-store-62659.appspot.com/o/ecommerce-3640321_1920.jpg?alt=media&token=4e594bd2-e704-487b-8936-26c88cf58a43')]);
  const [virtualData, setVirtualData] = useState({slides: []});

  useEffect(() => {
    _isMounted = true;
    const myswiper2 = new Swiper('#swiper1', {
      initialSlide: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      virtual: {
        slides: slides,
        renderExternal(data) {
          if(_isMounted)
          setVirtualData(data);
        },
        from: 1
      },
    });
    return () => {
      _isMounted = false;
    }
  }, []);

  return (
      <div className={`swiper-container ${classes.swiper1}`} id="swiper1">
        <div className="swiper-wrapper">
          {virtualData.slides.map((slide, index) => (
            <div className="swiper-slide"
                 key={index}
                 style={{left: `${virtualData.offset}px`}}
            >{slide}</div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
  );
}

export default withStyles(styles)(SwiperRow);

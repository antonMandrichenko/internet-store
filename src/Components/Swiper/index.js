import React, {useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
// import './swiper.css'

const styles = theme => ({
  swiper1: {
    width: '90%',
    height: '400px',
    // border: '1px solid black',
    marginBottom: '2rem'
  },
  'swiper-slide': {
    textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageMain: {
    width: '100%',
  }
});

function SwiperRow({classes}) {
  const [slides, setSlides] = useState(['slide1', 'slide2', 'slide3']);
  const [virtualData, setVirtualData] = useState({slides: []});

  // let myswiper;

  useEffect(() => {
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
          setVirtualData(data);
        },
        from: 1
      },
    });
  }, []);

  return (
      <div className={`swiper-container ${classes.swiper1}`} id="swiper1">
        <div className="swiper-wrapper">
          {virtualData.slides.map((slide, index) => (
            <div className="swiper-slide"
                 key={index}
                 style={{left: `${virtualData.offset}px`,
                   backgroundImage: "url('http://lorempixel.com/600/600/nature/1')"}}
            >{slide}</div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
  );
}

export default withStyles(styles)(SwiperRow);

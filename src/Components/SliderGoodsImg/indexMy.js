// import React, {useState} from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
// import IconButton from "@material-ui/core/IconButton";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import Grid from "@material-ui/core/Grid";
// import CardMedia from "@material-ui/core/CardMedia";
// import SmallImg from "./SmallImg";
//
// const styles = theme => ({
//   slideContainer: {
//     width: '100%',
//     transition:'2s all ease'
//   },
//   slideAside: {
//     border: '1px solid black',
//     transition:'5s all ease',
//     animation: 'shadow 1s ease-in-out 0.5s alternate, move 5s linear 2s'
//   },
//   slideMain: {
//     width: 'inherit',
//     height: 'inherit',
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   imageMain: {
//     width: '100%',
//
//   }
// });
//
// function SliderGoodsImg({classes}) {
//
//   const [images, setImages] = useState([
//     './img/avatar.jpg',
//     './img/couch-1835923_1920.jpg',
//     './img/phone-4060860_1920.jpg',
//     './img/wall-416060_1280.jpg'
//   ]);
//   const [currentImgIndex, setCurrentImgIndex] = useState(0);
//
//   const changeIndexImg = (e) => {
//     let newIndex;
//     if(e.currentTarget.dataset.direction === 'left' ) {
//       if(currentImgIndex > 0) {
//         newIndex = currentImgIndex - 1;
//       } else {
//         newIndex = images.length - 1;
//       }
//     }
//     if(e.currentTarget.dataset.direction === 'right') {
//       if(currentImgIndex < images.length - 1) {
//         newIndex = currentImgIndex + 1;
//       } else {
//         newIndex = 0;
//       }
//     }
//     setCurrentImgIndex(newIndex)
//
//   };
//
//   return (
//     <Grid container className={classes.slideContainer}>
//       <Grid item md={1} className={classes.slideAside}>
//         {images.map((img, ind) =>
//           <SmallImg
//             key={img}
//             src={images[ind]}
//             ind={ind}
//             currentImgIndex={currentImgIndex}
//           />
//           )
//         }
//       </Grid>
//       <Grid item md={11} className={classes.slideAside}>
//         <div className={classes.slideMain}>
//           <IconButton data-direction="left" onClick={changeIndexImg}>
//             <ChevronLeftIcon/>
//           </IconButton>
//           <CardMedia
//             component="img"
//             alt="Contemplative Reptile"
//             className={classes.media}
//             height="600px"
//             image={images[currentImgIndex]}
//             title="Contemplative Reptile"
//           />
//           {/*<img src= className={classes.imageMain}/>*/}
//           <IconButton data-direction="right" onClick={changeIndexImg}>
//             <ChevronRightIcon/>
//           </IconButton>
//         </div>
//
//       </Grid>
//
//
//     </Grid>
//   );
// }
//
// export default withStyles(styles)(SliderGoodsImg);

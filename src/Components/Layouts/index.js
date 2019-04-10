import React, {Fragment} from 'react';
import Header from '../Header/Header';
import Grid from "@material-ui/core/Grid";
import Aside from "../Aside";
import SwiperRow from "../Swiper";
import Minicart from "../Minicart";
import Divider from "@material-ui/core/Divider";
import PersonalData from "../PersonalData";
import Pagination from "../Pagination";
import CardProduct from "../CardProduct";

function Layouts(props) {
  return (
    <Fragment>
      <Header/>
      <Grid container style={{width: '70%', margin: '0 auto'}}>
        <Grid item md={2}>
          <Aside/>
          <Divider variant="middle" />
          <PersonalData/>
        </Grid>
        <Grid item md={10}>
          <SwiperRow/>
          <Grid container spacing={16}>
            <Grid item lg={3} md={4}>
              <Minicart/>
            </Grid>
            <Grid item lg={3} md={4}>
              <Minicart/>
            </Grid>
            <Grid item lg={3} md={4}>
              <Minicart/>
            </Grid>
            <Grid item lg={3} md={4}>
              <Minicart/>
            </Grid>
            <Grid item lg={3} md={4}>
              <Minicart/>
            </Grid>
            <Grid item lg={3} md={4}>
              <Minicart/>
            </Grid>
          </Grid>

          <Pagination/>
          {/*<SliderGoodsImg/>*/}
        </Grid>

        <CardProduct/>

      </Grid>

    </Fragment>

  );
}

export default Layouts;

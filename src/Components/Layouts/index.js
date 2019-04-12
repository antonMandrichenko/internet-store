import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import Grid from "@material-ui/core/Grid";
import Aside from "../Aside";
import SwiperRow from "../Swiper";
import Minicart from "../Minicart";
import Divider from "@material-ui/core/Divider";
import PersonalData from "../PersonalData";
import Pagination from "../Pagination";
import CardProduct from "../CardProduct";
import SignIn from "../SignIn";
import Registered from "../Registered";

const styles = theme => ({
  grid: {
    width: '70%',
    margin: '0 auto',
    paddingBottom: '.5rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '0 .5rem',
      paddingBottom: '.5rem'
    },
  },

});

function Layouts({classes}) {
  return (
    <Fragment>
      <Header/>
      <Grid container className={classes.grid}>
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
        <Registered/>

      </Grid>

    </Fragment>

  );
}

export default withStyles(styles)(Layouts);

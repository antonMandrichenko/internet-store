import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Aside from "../Aside";
import SwiperRow from "../Swiper";
import Divider from "@material-ui/core/Divider";
import PersonalData from "../PersonalData";
import Pagination from "../Pagination";
import ListOfProducts from "../../../Containers/ListOfProducts";
import { styles } from "./style";

Layouts.propTypes = {
  classes: PropTypes.object.isRequired,
};

function Layouts({classes}) {
  return (
    <Fragment>
      <Grid container className={classes.grid}>
        <Grid item md={2}>
          <Aside/>
          <Divider variant="middle"/>
          <PersonalData/>
        </Grid>
        <Grid item md={10} sm={12}>
          <SwiperRow/>
          <ListOfProducts/>
          <Pagination/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(Layouts);

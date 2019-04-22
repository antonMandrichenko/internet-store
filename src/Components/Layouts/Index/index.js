import React, {Fragment, useEffect} from 'react';
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
import { compose } from "redux";
import { connect } from "react-redux";
import { mapDispatchToProps } from "./redux";
import {routes} from "./routsLayouts";
import {Route, Switch, withRouter} from "react-router-dom";

Layouts.propTypes = {
  classes: PropTypes.object.isRequired,
};

function Layouts({classes, noCurrentProduct, history, noCurrentCategory}) {

  useEffect(() => {
    noCurrentProduct();
    // noCurrentCategory();
  },[]);

  return (
    <Fragment>
      <Grid container className={classes.grid}>
        <Grid item md={2}>
          <Aside/>
          <Divider variant="middle"/>
          <PersonalData/>
        </Grid>
        <Grid item md={10} sm={12}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default compose(
  withRouter,
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(Layouts);


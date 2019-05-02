import React, {Fragment, useEffect} from 'react';
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import {firestoreConnect, withFirebase} from "react-redux-firebase";
import {styles} from "./style";
import {compose} from "redux";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {mapDispatchToProps, mapStateToProps} from "./redux";
import {routes} from "./routsLayouts";
import Footer from "../../../components/layouts/Footer";

Layouts.propTypes = {
  classes: PropTypes.object.isRequired,
  noCurrentProduct: PropTypes.func.isRequired,
  auth: PropTypes.any,
  users: PropTypes.any,
  getCurrentUser: PropTypes.func.isRequired,
};

function Layouts({
                   classes,
                   noCurrentProduct,
                   auth,
                   users,
                   getCurrentUser
                 }) {

  useEffect(() => {
    noCurrentProduct();
    if (users && auth.uid) {
      getCurrentUser(users, auth.uid);
    }
  }, [auth, users]);

  return (
    <Fragment>
      <Grid container className={classes.grid}>
        <Grid item md={2}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.aside}
              />
            ))}
          </Switch>
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
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default compose(
  withFirebase,
  firestoreConnect([
    {collection: 'users'},
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Layouts);

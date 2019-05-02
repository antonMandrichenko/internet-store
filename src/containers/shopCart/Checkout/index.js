import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../../../components/shopCart/checkout/AdressForm';
import PaymentForm from '../../../components/shopCart/checkout/PaymentForm';
import Review from '../../../components/shopCart/checkout/ReviewForm';
import {styles} from './style';
import {mapDispatchToProps, mapStateToProps} from "./redux";
import CircularIndeterminate from "../../../components/Circular";
import withError from "../../../hoc/withError";
import withSuccess from "../../../hoc/withSuccess";

const steps = ['Shipping address', 'Payment details', 'Review your order'];

class Checkout extends React.Component {

  state = {
    activeStep: 0,
    userData: {
      ...this.props.currentUser
    },
    isChange: false,
  };

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm
          auth={this.props.auth}
          currentUser={this.props.currentUser}
          handleChange={this.handleChange}
          state={this.state}
        />;
      case 1:
        return <PaymentForm
          handleChange={this.handleChange}
          state={this.state}
        />;
      case 2:
        return <Review
          state={this.state}
          products={this.props.productsInCart}
          totalAmount={this.props.totalAmount}
        />;
      default:
        throw new Error('Unknown step');
    }
  };

  handleNext = (e) => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    if (e.target.innerHTML === 'Place order') {
      this.handleSubmit()
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = e => {
    if (this.state.activeStep === 0) {
      this.setState({
        userData: {
          ...this.state.userData,
          shippingAdress: {
            ...this.state.userData.shippingAdress,
            [e.target.id]: e.target.value
          }
        },
        isChange: true,
      });
    } else {
      this.setState({
        userData: {
          ...this.state.userData,
          payment: {
            ...this.state.userData.payment,
            [e.target.id]: e.target.value
          }
        },
        isChange: true,
      });
    }
  };

  handleSubmit = () => {
    if(this.state.isChange)
    this.props.updateUser(this.state.userData, this.props.auth.uid);
    this.props.createOrder(
      this.props.auth.uid,
      this.props.productsInCart,
      this.props.totalAmount,
      this.props.orders.length + 1
    )
  };

  render() {
    const {classes, users, auth, orders, isLoading} = this.props;
    const {activeStep} = this.state;

    return (
      <Fragment>
        <CssBaseline/>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography
              component="h1"
              variant="h4"
              align="center">
              Checkout
            </Typography>
            {
              auth && users && orders
                ? <Fragment>
                  <Stepper
                    activeStep={activeStep}
                    className={classes.stepper}>
                    {steps.map(label => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  <Fragment>
                    {activeStep === steps.length
                      ? (
                          isLoading
                            ? <CircularIndeterminate/>
                            : <Fragment>
                                <Typography variant="h5" gutterBottom>
                                  Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                  Your order number is #{this.props.orders.length}. We have emailed your order confirmation, and
                                  will
                                  send you an update when your order has shipped.
                                </Typography>
                              </Fragment>
                        )
                      : (
                          <Fragment>
                            {this.getStepContent(activeStep)}
                            <div className={classes.buttons}>
                              {activeStep !== 0 && (
                                <Button
                                  onClick={this.handleBack}
                                  className={classes.button}>
                                  Back
                                </Button>
                              )}
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleNext}
                                className={classes.button}
                              >
                                {activeStep === steps.length - 1
                                  ? 'Place order'
                                  : 'Next'}
                              </Button>
                            </div>
                          </Fragment>
                      )}
                  </Fragment>
                </Fragment>
                : <CircularIndeterminate/>
            }
          </Paper>
        </main>
      </Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.any,
  auth: PropTypes.any,
  orders: PropTypes.any,
  productsInCart: PropTypes.array,
  totalAmount: PropTypes.any,
  updateUser: PropTypes.func,
  createOrder: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  success: PropTypes.object,
};

const WithMessagesCheckout = withSuccess(withError(Checkout));

export default compose(
  withRouter,
  firebaseConnect(),
  firestoreConnect([
    {collection: 'users'},
    {collection: 'orders'},
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(WithMessagesCheckout);

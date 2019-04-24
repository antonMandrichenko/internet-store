import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../AdressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import Review from '../ReviewForm/ReviewForm';
import { styles } from './style';
import { mapDispatchToProps, mapStateToProps } from "./redux";
import CircularIndeterminate from "../../../../Components/Circular";

const steps = ['Shipping address', 'Payment details', 'Review your order'];

class Checkout extends React.Component {

  currentUser = () => {
    if(this.props.auth.uid) {
      return this.props.users.filter((user) =>
        user.id === this.props.auth.uid)[0]
    } else {
      return {}
    }
  };

  state = {
    activeStep: 0,
    userData: {
      firstName: '',
      secondName: '',
      initials: '',
      email: '',
      shippingAdress: {},
      payment: {},
    }
  };

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm
          auth={this.props.auth}
          currentUser={this.currentUser()}
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
    if(e.target.innerHTML === 'Place order') {
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
    if(this.state.activeStep === 0) {
      this.setState({
        userData: {
          ...this.state.userData,
          shippingAdress: {
            ...this.state.userData.shippingAdress,
            [e.target.id]: e.target.value
          }
        }
      });
    } else {
      this.setState({
        userData: {
          ...this.state.userData,
          payment: {
            ...this.state.userData.payment,
            [e.target.id]: e.target.value
          }
        }
      });
    }
  };

  handleSubmit = () => {
    this.props.updateUser(this.state.userData, this.props.auth.uid);
    this.props.createOrder(
      this.props.auth.uid,
      this.props.productsInCart,
      this.props.totalAmount,
      this.props.orders.length + 1
    )
  };

  componentDidMount() {
    const currUser = this.currentUser();
    this.setState( {
      ...this.state,
      userData: {
        ...this.state.userData,
        firstName:  currUser ? currUser.firstName : '',
        secondName: currUser ? currUser.secondName : '',
        initials: currUser ? currUser.initials : '',
        email: currUser ? currUser.email : '',
        shippingAdress: {
          address: currUser ? currUser.shippingAdress.address : '',
          city: currUser ? currUser.shippingAdress.city : '',
          country: currUser ? currUser.shippingAdress.country : '',
          state: currUser ? currUser.shippingAdress.state : '',
          zip: currUser ? currUser.shippingAdress.zip : '',
        },
        payment: {
          cardName: currUser ? currUser.payment.cardName : '',
          cardNumber: currUser ? currUser.payment.cardNumber : '',
          cvv: currUser.payment.cvv || '',
          expDate: currUser ? currUser.payment.expDate : '',
        },
      }
    });
  }

  render() {
    const { classes, users, auth, orders } = this.props;
    const { activeStep } = this.state;

    return (
      <Fragment>
        <CssBaseline />

        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            {
              auth && users && orders
                ?  <Fragment>
                  <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map(label => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  <Fragment>
                    {activeStep === steps.length ? (
                      <Fragment>
                        <Typography variant="h5" gutterBottom>
                          Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                          Your order number is #{this.props.orders.length}. We have emailed your order confirmation, and will
                          send you an update when your order has shipped.
                        </Typography>
                      </Fragment>
                    ) : (
                      <Fragment>
                        {this.getStepContent(activeStep)}
                        <div className={classes.buttons}>
                          {activeStep !== 0 && (
                            <Button onClick={this.handleBack} className={classes.button}>
                              Back
                            </Button>
                          )}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                          </Button>
                        </div>
                      </Fragment>
                    )}
                  </Fragment>
                </Fragment>
                :<CircularIndeterminate/>
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
};

export default compose(
  withRouter,
  firebaseConnect(),
  firestoreConnect([
    {collection: 'users'},
    {collection: 'orders'},
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Checkout);


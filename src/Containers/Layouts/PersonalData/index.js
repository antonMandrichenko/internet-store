import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styles } from './style';
import CircularIndeterminate from "../../../Components/Circular";
import { mapStateToProps } from "./redux";

class PersonalData extends React.Component {
  state = {
    expanded: null,
    currentUser: {}
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    if(this.props.auth.isEmpty) {
      return <Typography variant="h5">You are not registered</Typography>
    }

    return (
      <div className={classes.root}>
        {
          this.props.auth.uid && this.props.users
            ? <Fragment>
              <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>General settings</Typography>
                  <Typography className={classes.secondaryHeading}>{this.props.currentUser.firstName} {this.props.currentUser.secondName}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Email: {this.props.currentUser.email}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Shipping address</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    {this.props.currentUser.shippingAdress.address} {this.props.currentUser.shippingAdress.city},  {this.props.currentUser.shippingAdress.state}, {this.props.currentUser.shippingAdress.country}, {this.props.currentUser.shippingAdress.zip}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Payment</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Card: {this.props.currentUser.payment.cardName}, number {this.props.currentUser.payment.cardNumber}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Fragment>
            : <CircularIndeterminate/>
        }
      </div>
    );
  }
}

PersonalData.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.any,
  users: PropTypes.any,
  currentUser: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  firebaseConnect(),
  firestoreConnect([
    {collection: 'users'},
  ]),
  withStyles(styles),
  connect(mapStateToProps)
)(PersonalData);



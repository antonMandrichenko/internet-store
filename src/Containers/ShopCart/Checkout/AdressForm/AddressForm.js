import React from 'react';
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


AddressForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

function AddressForm({ handleChange, state }) {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            value={state.userData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="secondName"
            name="secondName"
            label="Second name"
            fullWidth
            autoComplete="sname"
            value={state.userData.secondName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            autoComplete="billing address-line"
            value={state.userData.shippingAdress.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            value={state.userData.shippingAdress.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            value={state.userData.shippingAdress.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            value={state.userData.shippingAdress.zip}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
            value={state.userData.shippingAdress.country}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;

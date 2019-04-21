import React, {useState} from 'react';
import PropTypes from "prop-types";
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from "redux";
import {firestoreConnect, withFirebase, withFirestore} from "react-redux-firebase";
import {connect} from "react-redux";
import {mapStateToProps} from "./redux";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { styles } from './style';
import CircularIndeterminate from "../../Circular";

ProductCreate.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.any,
  subcategories: PropTypes.any,
};

function ProductCreate({classes, categories, subcategories}) {

  const [category, setCategory] = useState('Category 1');
  const [subcategory, setSubCategory] = useState('Category 1');

  const handleChange = e => {
    e.target.name === 'categories'
      ? setCategory(e.target.value)
      : setSubCategory(e.target.value);
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
      <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Create product
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name of product"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="discount"
            name="discount"
            label="Discount"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputBase
            type="file"
            required
            id="img"
            name="img"
            label="Images"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Specification:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="color"
            name="color"
            label="Color"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="width"
            name="width"
            label="Width"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="height"
            name="height"
            label="Height"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="height"
            name="height"
            label="Height"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="categories">Category</InputLabel>
            <Select
              value={category}
              onChange={handleChange}
              inputProps={{
                id: 'categories',
                name: 'categories',
              }}
              className={classes.selectEmpty}
            >
              {categories
                ? categories.map((category, ind) =>
                  <MenuItem value={ind}>{category.name}</MenuItem>
                )
                : <CircularIndeterminate/>}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="subcategories">Subcategory</InputLabel>
            <Select
              value={subcategory}
              onChange={handleChange}
              inputProps={{
                id: 'subcategories',
                name: 'subcategories',
              }}
              className={classes.selectEmpty}
            >
              {subcategories
                ? subcategories.map((category, ind) =>
                  <MenuItem value={ind}>{category.name}</MenuItem>
                )
                : <CircularIndeterminate/>}
            </Select>
          </FormControl>
        </Grid>
        <div className={classes.buttons}>
          <Button className={classes.button} variant="contained"
                  color="primary">
            Create product
          </Button>
        </div>
      </Grid>
      </Paper>
      </main>
    </React.Fragment>
  );
}

export default compose(
  withFirebase,
  withFirestore,
  firestoreConnect([
    {collection: 'categories'},
    {collection: 'subcategories'},
  ]),
  withStyles(styles),
  connect(mapStateToProps)
)(ProductCreate);


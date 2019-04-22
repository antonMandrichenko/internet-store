import React, {useState} from 'react';
import PropTypes from "prop-types";
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from "redux";
import {firebaseConnect, firestoreConnect, withFirebase, withFirestore} from "react-redux-firebase";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./redux";
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
import {NavLink, withRouter} from "react-router-dom";
import Link from "@material-ui/core/Link";

ProductCreate.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.any,
  subcategories: PropTypes.any,
};

function ProductCreate(props) {
  const {classes, categories, createProduct, history} = props;
  console.log(props)
  const initState = {
    amount: 1,
    category: '',
    description: '',
    name: '',
    price: '',
    specification: {},
    status: 'aviable',
  };
  console.log(props)
  const [category, setCategory] = useState('Category 1');
  const [imagesFiles, setImagesFiles] = useState({});
  const [productCreate, setProductCreate] = useState(initState);
  const [specification, setSpecification] = useState({});

  const handleChange = e => {
      setCategory(e.target.value);
      setProductCreate({
        ...productCreate,
        category: e.target.value
      });
  };

  const handleChangeInput = e => {
    const target = e.target;
    if (target.id === 'img') {
      setImagesFiles(target.files);
    } else {
      if (target.name === 'color'
        || target.name === 'country'
        || target.name === 'width'
        || target.name === 'height'
        || target.name === 'weight'
      ) {
        setSpecification({
          ...specification,
          [target.id]: target.value
        });
        setProductCreate({
          ...productCreate,
          specification: {...specification},
        });
      } else {
        setProductCreate({
          ...productCreate,
          specification: {...specification},
          rate: '',
          [target.id]: target.value
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(imagesFiles);
    createProduct(imagesFiles, productCreate);
    history.push("/dashboard/products/list");
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Create product
          </Typography>
          <form className={classes.container} onSubmit={handleSubmit}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Name of product"
                  fullWidth
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="description"
                  name="description"
                  label="Description"
                  fullWidth
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="price"
                  name="price"
                  label="Price"
                  fullWidth
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="img">Add 4 images</InputLabel>
                <InputBase
                  type="file"
                  required
                  inputProps={{
                    multiple: true,
                    accept: "image/*"
                  }}
                  id="img"
                  name="img"
                  label="Images"
                  fullWidth
                  onChange={handleChangeInput}
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
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="width"
                  name="width"
                  label="Width"
                  fullWidth
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="height"
                  name="height"
                  label="Height"
                  fullWidth
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="weight"
                  name="weight"
                  label="Weight"
                  fullWidth
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="category">Category</InputLabel>
                  <Select
                    value={category}
                    onChange={handleChange}
                    id="category"
                    name="category"
                    className={classes.selectEmpty}
                  >
                    {categories
                      ? categories.map((category, ind) =>
                        <MenuItem key={ind} value={category.name}>{category.name}</MenuItem>
                      )
                      : <CircularIndeterminate/>}
                  </Select>
                </FormControl>
              </Grid>
              <div className={classes.buttons}>
                <Button className={classes.button} variant="contained"
                        color="primary" type="submit">
                  Create product
                </Button>
              </div>
            </Grid>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}

export default compose(
  withRouter,
  firebaseConnect(),
  withFirestore,
  firestoreConnect([
    {collection: 'categories'},
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductCreate);


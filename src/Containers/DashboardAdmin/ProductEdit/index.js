import React, { useState } from 'react';
import PropTypes from "prop-types";
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CircularIndeterminate from "../../../Components/Circular";
import { styles } from './style';
import {mapStateToProps, mapDispatchToProps} from "./redux";

ProductEdit.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  categories: PropTypes.any,
  editProduct: PropTypes.object.isRequired,
  updateProduct: PropTypes.func.isRequired,
};

function ProductEdit(props) {
  const {classes, editProduct, updateProduct, history, categories} = props;

  const initState = {
    amount: editProduct.amount,
    category: editProduct.category,
    description: editProduct.description,
    img: editProduct.img,
    name: editProduct.name,
    price: editProduct.price,
    specification: editProduct.specification,
    status: editProduct.status,
  };

  const [category, setCategory] = useState(editProduct.category);
  const [productCreate, setProductCreate] = useState(initState);
  const [specification, setSpecification] = useState(editProduct.specification);

  const handleChange = e => {
      setCategory(e.target.value);
      setProductCreate({
        ...productCreate,
        category: e.target.value
      });
  };

  const handleChangeInput = e => {
    const target = e.target;
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(productCreate, editProduct.id);
    history.push("/dashboard/products/list");
  };

  return (
    <React.Fragment>
      {editProduct
        ? <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Edit product
            </Typography>
            <form className={classes.container} onSubmit={handleSubmit}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Name of product"
                    defaultValue={productCreate.name}
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
                    defaultValue={productCreate.description}
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
                    defaultValue={productCreate.price}
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
                    defaultValue={productCreate.specification.color}
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
                    defaultValue={productCreate.specification.country}
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
                    defaultValue={productCreate.specification.width}
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
                    defaultValue={productCreate.specification.height}
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
                    defaultValue={productCreate.specification.weight}
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
                    Edit product
                  </Button>
                </div>
              </Grid>
            </form>
          </Paper>
        </main>
        :<CircularIndeterminate/>
      }
    </React.Fragment>
  );
}

export default compose(
  withRouter,
  firestoreConnect([
    {collection: 'categories'},
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductEdit);

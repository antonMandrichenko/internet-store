import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {firestoreConnect, withFirebase, withFirestore} from "react-redux-firebase";
import {connect} from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";
import { compose } from "redux";
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import { styles } from './style';
import CircularIndeterminate from "../../Circular";
import {withRouter} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

ProductList.propTypes = {
  products: PropTypes.any,
  classes: PropTypes.object.isRequired,
};

function ProductList({products, classes, deleteProduct, history, editProduct}) {

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const handleEdit = (products, id) => {
    console.log('list products', products)
    editProduct([...products], id);
    history.push("/dashboard/products/edit");
  };

  const handleCreateProduct = () => {
    history.push("/dashboard/products/create");
  };

  return (
    <Paper className={classes.paper}>
      {products
        ? <Fragment>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>ID product</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Photo</TableCell>
                  {/*<TableCell>Categories</TableCell>*/}
                  {/*<TableCell>Subcategories</TableCell>*/}
                  <TableCell>Price</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map(product => (
                  <TableRow key={product.id}>
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell><img
                      src={product.img[0]}
                      className={classes.image}
                      alt={product.img[0]}
                    /></TableCell>
                    {/*<TableCell>{[...product.category]}</TableCell>*/}
                    {/*<TableCell>{[...product.subcategory]}</TableCell>*/}
                    <TableCell>${product.price}</TableCell>
                    <TableCell>{product.status}</TableCell>
                    <TableCell>{product.rate === "" ? 0 : +product.rate + 1}</TableCell>
                    <TableCell>
                      <Button
                        onClick={handleEdit.bind(this, products, product.id)}
                        color="primary">
                        edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={handleDelete.bind(this, product.id)}
                        color="primary">
                        delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          <div className={classes.buttons}>
            <Button className={classes.button} variant="contained"
                    color="primary" onClick={handleCreateProduct}>
              Create product
            </Button>
          </div>
        </Fragment>

          : <CircularIndeterminate/>}
    </Paper>
  );
}

export default compose(
  withRouter,
  withFirebase,
  withFirestore,
  firestoreConnect([
    {collection: 'products'}
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductList);

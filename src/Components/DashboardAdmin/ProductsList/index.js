import React from 'react';
import PropTypes from 'prop-types';
import {firestoreConnect, withFirebase, withFirestore} from "react-redux-firebase";
import {connect} from "react-redux";
import { mapStateToProps } from "./redux";
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

ProductList.propTypes = {
  products: PropTypes.any,
  classes: PropTypes.object.isRequired,
};

function ProductList({products, classes}) {

  // const handleClick = (id) => {
  //   // deleteReview(id)
  // };

  return (
    <Paper className={classes.root}>
      {products
        ? <Table className={classes.table}>
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
                  src={product.img.first}
                  className={classes.image}
                  alt={product.img.first}
                /></TableCell>
                {/*<TableCell>{[...product.category]}</TableCell>*/}
                {/*<TableCell>{[...product.subcategory]}</TableCell>*/}
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.status}</TableCell>
                <TableCell>{product.rate}</TableCell>
                <TableCell>
                  <Button
                    // onClick={handleClick.bind(this, review.id)}
                    color="primary">
                    edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    // onClick={handleClick.bind(this, review.id)}
                    color="primary">
                    delete
                  </Button>
                </TableCell>
              </TableRow>
              ))}
            </TableBody>
      </Table>
          : <CircularIndeterminate/>}
    </Paper>
  );
}

export default compose(
  withFirebase,
  withFirestore,
  firestoreConnect([
    {collection: 'products'}
  ]),
  withStyles(styles),
  connect(mapStateToProps)
)(ProductList);

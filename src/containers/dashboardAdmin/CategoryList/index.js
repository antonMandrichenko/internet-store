import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import CircularIndeterminate from "../../../components/Circular";
import Typography from "@material-ui/core/Typography";
import {mapDispatchToProps, mapStateToProps} from "./redux";
import {styles} from './style';
import withError from "../../../hoc/withError";

ProductList.propTypes = {
  categories: PropTypes.any,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  error: PropTypes.object,
};

function ProductList({
                       categories,
                       classes,
                       history,
                       deleteCategory
                     }) {

  const handleDelete = (id) => {
    deleteCategory(id);
  };

  const handleCreateCategory = () => {
    history.push("/dashboard/categories/create");
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant={"h6"}>
        List of categories
      </Typography>
      {categories
        ? <Fragment>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>ID category</TableCell>
                <TableCell/>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map(category => (
                <TableRow key={category.id}>
                  <TableCell component="th" scope="row">
                    {category.name}
                  </TableCell>
                  <TableCell>{category.id}</TableCell>
                  <TableCell>
                    <Button
                      onClick={handleDelete.bind(this, category.id)}
                      color="primary">
                      delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleCreateCategory}>
              Create category
            </Button>
          </div>
        </Fragment>
        : <CircularIndeterminate/>}
    </Paper>
  );
}

const WithErrorProductList = withError(ProductList);

export default compose(
  withRouter,
  firestoreConnect([
    {collection: 'categories'}
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(WithErrorProductList);

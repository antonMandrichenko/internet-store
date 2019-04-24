import React, {useState} from 'react';
import PropTypes from "prop-types";
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { firebaseConnect, withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { mapDispatchToProps } from "./redux";
import { styles } from './style';


CategoryCreate.propTypes = {
  classes: PropTypes.object.isRequired,
  createCategory: PropTypes.func,
  history: PropTypes.object.isRequired,
};

function CategoryCreate({classes, createCategory, history}) {

  const initState = {
    name: '',
  };

  const [categoryCreate, setCategoryCreate] = useState(initState);

  const handleChangeInput = e => {
    const target = e.target;
    setCategoryCreate({
      [target.id]: target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory(categoryCreate);
    history.push("/dashboard/categories/list");
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
      <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Create category/subcategory
      </Typography>
        <form
          className={classes.container}
          onSubmit={handleSubmit}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            onChange={handleChangeInput}
          />
        </Grid>
        <div className={classes.buttons}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit">
            Create category
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
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(CategoryCreate);


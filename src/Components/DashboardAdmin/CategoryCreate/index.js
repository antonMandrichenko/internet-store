import React, {useState} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { styles } from './style';
import {firebaseConnect, withFirestore} from "react-redux-firebase";
import {connect} from "react-redux";
import { mapDispatchToProps } from "./redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

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
        <form className={classes.container} onSubmit={handleSubmit}>
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
          <Button className={classes.button} variant="contained"
                  color="primary" type="submit">
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


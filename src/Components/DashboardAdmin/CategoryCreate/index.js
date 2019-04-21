import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

function CategoryCreate({classes}) {
  return (
    <React.Fragment>
      <main className={classes.layout}>
      <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Create category/subcategory
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            required
            id="category"
            name="category"
            label="Category"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="subcategory"
            name="subcategory"
            label="Subcategory"
            fullWidth
          />
        </Grid>
        <div className={classes.buttons}>
          <Button className={classes.button} variant="contained"
                  color="primary">
            Create category
          </Button>
        </div>
      </Grid>
      </Paper>
      </main>
    </React.Fragment>
  );
}

export default withStyles(styles)(CategoryCreate);

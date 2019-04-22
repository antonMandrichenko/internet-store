import React, {useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import CircularIndeterminate from "../../Circular";
import { styles } from "./style";
import {firestoreConnect, withFirebase, withFirestore} from "react-redux-firebase";
import {connect} from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

function Aside({classes, categories, history, getCurrentCategory}) {

  const [sortCategories, setSortCategories] = useState([]);

  const sortArray = (a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  };

  const handleLink = (e) => {
    console.dir(e.target);
    getCurrentCategory(e.target.innerHTML);
    history.push(`/${e.target.innerHTML}/products`);
  };

  useEffect(() => {
    setSortCategories(categories ? categories.sort(sortArray) : [])
  }, [categories]);

  return (
    <List className={classes.root}>
      { categories
        ? sortCategories.map((item) =>
          <ListItem button key={item.id} onClick={handleLink}>
            <ListItemText
              primary={item.name}
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <i className="material-icons">
                  keyboard_arrow_right
                </i>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
        : <CircularIndeterminate/>
      }
    </List>
  );
}

export default compose(
  withRouter,
  withFirebase,
  withFirestore,
  firestoreConnect([
    {collection: 'categories'}
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Aside);


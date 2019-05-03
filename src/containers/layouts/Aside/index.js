import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import CircularIndeterminate from "../../../components/Circular";
import ListSubheader from "@material-ui/core/ListSubheader";
import {styles} from "./style";
import {mapStateToProps, mapDispatchToProps} from "./redux";
import {sortArrayByName} from '../../../utils/sortArray';

Aside.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.any,
  history: PropTypes.object.isRequired,
  getCurrentCategory: PropTypes.func.isRequired,
};

function Aside({
                 classes,
                 categories,
                 history,
                 getCurrentCategory
               }) {

  const [sortCategories, setSortCategories] = useState([]);

  const handleLink = (e) => {
    getCurrentCategory(e.target.innerHTML);
    history.push(`/${e.target.innerHTML}/products`);
  };

  useEffect(() => {
    setSortCategories(categories
      ? categories.sort(sortArrayByName)
      : sortCategories)
  }, [categories]);

  return (
    <List className={classes.root}>
      <ListSubheader
        component="div"
        className={classes.subHeader}
        color="primary">
        Products
      </ListSubheader>
      {categories
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
  firestoreConnect([
    {collection: 'categories'}
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Aside);

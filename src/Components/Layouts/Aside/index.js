import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { styles } from "./style";

const categories = [
  'Стенки',
  'Детская',
  'Кухня',
  'Прихожая',
  'Офис',
  'Комоды',
  'Кровати',
];

function Aside({classes}) {
  return (
    <List className={classes.root}>
      {
        categories.map((item) =>
          <ListItem button key={item}>
            <ListItemText
              primary={item}
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
      }
    </List>
  );
}

export default withStyles(styles)(Aside);

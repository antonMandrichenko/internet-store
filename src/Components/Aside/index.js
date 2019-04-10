import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

const categories = [
  'Стенки',
  'Детская',
  'Кухня',
  'Прихожая',
  'Офис',
  'Комоды',
  'Кровати',
];

function Aside() {
  return (
    <List >
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

export default Aside;

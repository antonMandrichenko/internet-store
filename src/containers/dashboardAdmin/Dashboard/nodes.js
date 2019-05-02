import React, {Fragment} from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";

Menu.propTypes = {
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  subcategories: PropTypes.array,
  handleClick: PropTypes.func.isRequired,
  noCollapse: PropTypes.string,
  history: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired,
  selectedIndex: PropTypes.any,
};

function Menu({
                text,
                isOpen,
                subcategories,
                handleClick,
                noCollapse,
                history,
                index,
                handleSelect,
                selectedIndex
              }) {

  const handleRoute = (text1, text2, index) => {
    if (!text2) {
      switch (text1) {
        case "Categories":
        case "Products":
          handleClick(text1);
          return;
        case "In store":
          history.push(`/`);
          return;
        default:
          handleSelect(index);
          history.push(`/dashboard/${text1.toLowerCase()}`);
          return;
      }
    }
    handleSelect(index);
    history.push(`/dashboard/${text1}/${text2}`)
  };

  return (
    <Fragment>
      <ListItem
        button
        onClick={() => {
          handleRoute(text, null, index)
        }}
        selected={selectedIndex === index}>
        <ListItemText primary={text}/>
        {!noCollapse
          ? isOpen
            ? <ExpandLess/>
            : <ExpandMore/>
          : null
        }
      </ListItem>
      {!noCollapse
        ? <Collapse
          in={isOpen}
          timeout="auto"
          unmountOnExit>
          {subcategories.map((subcategory, ind) => {
              const subIndex = (index + 1) * 10 + ind;
              return <List component="div" disablePadding key={ind}>
                <ListItem
                  button
                  onClick={() => {
                    handleRoute(text.toLowerCase(), subcategory.toLowerCase(), subIndex)
                  }}
                  selected={selectedIndex === subIndex}>
                  <ListItemIcon>
                    <StarBorder/>
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary={subcategory}
                  />
                </ListItem>
              </List>
            }
          )}
        </Collapse>
        : null
      }
    </Fragment>
  );
}

export default Menu;

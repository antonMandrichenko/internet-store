import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {styles} from './style';

SortSelect.propTypes = {
  sortProducts: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

function SortSelect({sortProducts, classes}) {

  const [sortValue, setSortValue] = useState({
    sort: "none"
  });

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    setSortValue({ [e.target.name]: e.target.value });
    sortProducts(e.target.value)
  };

  return (
    <form
      autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel
          htmlFor="sort">
          Sort by:
        </InputLabel>
        <Select
          value={sortValue.sort}
          onChange={handleChange}
          autoWidth={true}
          inputProps={{
            name: 'sort',
            id: 'sort',
          }}
        >
          <MenuItem value="none">
            none
          </MenuItem>
          <MenuItem value="Alphabetically">
            Alphabetically
          </MenuItem>
          <MenuItem value="low">
            Price, low to high
          </MenuItem>
          <MenuItem value="high">
            Price, high to low
          </MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

export default withStyles(styles)(SortSelect);

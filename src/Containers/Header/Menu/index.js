import React, { useState } from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { styles } from "./style";


Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

function Menu({classes}) {

  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <Tabs value={value} onChange = {handleChange} textColor="primary" className={classes.menu}>
      <Tab value="one" label="Goods" className={classes.goodsButton}/>
      <Link  color="textPrimary" underline="none" component={ NavLink } to="/aboutus">
        <Tab value="two" label="About us" />
      </Link>
      <Link  color="textPrimary" underline="none" component={ NavLink } to="/forcostumers">
        <Tab value="three" label="For customers" />
      </Link>
    </Tabs>
  );
}

export default withStyles(styles)(Menu);

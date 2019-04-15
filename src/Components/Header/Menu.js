import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  goodsButton: {
    background: '#366438',
  },
  menu: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  }
});

function Menu({classes}) {

  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <Tabs value={value} onChange = {handleChange} className={classes.menu}>
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

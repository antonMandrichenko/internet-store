import React, { useState } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  goodsButton: {
    background: '#366438',
  },
});

function Menu({classes}) {

  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <Tabs value={value} onChange = {handleChange}>
      <Tab value="one" label="Goods" className={classes.goodsButton}/>
      <Tab value="two" label="About us" />
      <Tab value="three" label="For customers" />
    </Tabs>
  );
}

export default withStyles(styles)(Menu);

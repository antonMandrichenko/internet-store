import React, { useState } from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from "react-router-dom";
import { styles } from "./style";


Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function Menu({classes, history}) {

  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
   history.push('/aboutus');
    setValue(value)
  };

  return (
    <Tabs value={value} className={classes.menu} onClick={handleChange}>
        <Tab
          value={0}
          label="About us"
        />
    </Tabs>
  );
}

export default withStyles(styles)(withRouter(Menu));

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AboutProduct from "./AboutProduct";
import Card from "@material-ui/core/Card";
import Specification from "./Specification";
import ViewRewiews from "../ViewRewiews";

function TabContainer(props) {
  return (
    <Card component="div" style={{ padding: '.5rem'}}>
      {props.children}
    </Card>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

TabsProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function TabsProduct({classes}) {

  const [valueTab, setValueTab] = useState(0);
  const handleChange = (e, value) => {
    setValueTab(value);
  };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={valueTab}
            onChange={handleChange}
            indicatorColor="primary"
            variant="scrollable"
            textColor="primary"
            scrollButtons="auto"
          >
            <Tab label="Short about product" />
            <Tab label="Specification" />
            <Tab label="Rewiews" />
          </Tabs>
        </AppBar>
        {valueTab === 0
        && <TabContainer>
          <AboutProduct/>
        </TabContainer>}
        {valueTab === 1
        && <TabContainer>
          <Specification/>
        </TabContainer>}
        {valueTab === 2
        && <TabContainer>
          <ViewRewiews/>
        </TabContainer>}
      </div>
    );
}

export default withStyles(styles)(TabsProduct);

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AboutProduct from "../aboutProduct/AboutProduct";
import Card from "@material-ui/core/Card";
import Specification from "../Specification";
import ViewRewiews from "../../../containers/rewiews/ViewReviews";
import {styles} from "./style";

function TabContainer(props) {
  return (
    <Card component="div" style={{padding: '.5rem'}}>
      {props.children}
    </Card>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

TabsProduct.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  handleToOrFromCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

function TabsProduct({
                       classes,
                       product,
                       handleToOrFromCart,
                       isInCart
                     }) {

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
          <Tab label="Short about product"/>
          <Tab label="Specification"/>
          <Tab label="Rewiews"/>
        </Tabs>
      </AppBar>
      {valueTab === 0
      && <TabContainer>
        <AboutProduct
          product={product}
          handleToOrFromCart={handleToOrFromCart}
          isInCart={isInCart}
        />
      </TabContainer>}
      {valueTab === 1
      && <TabContainer>
        <Specification product={product}/>
      </TabContainer>}
      {valueTab === 2
      && <TabContainer>
        <ViewRewiews product={product}/>
      </TabContainer>}
    </div>
  );
}

export default withStyles(styles)(TabsProduct);

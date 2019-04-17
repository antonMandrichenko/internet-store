import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AboutProduct from "../about/AboutProduct";
import Card from "@material-ui/core/Card";
import Specification from "../specification/Specification";
import ViewRewiews from "../../../Containers/ViewRewiews/Index";
import { styles } from "./style";

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
  product: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

function TabsProduct({classes, product, handleAddToCart, isInCart}) {

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
          <AboutProduct
            product={product}
            handleAddToCart={handleAddToCart}
            isInCart={isInCart}
          />
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

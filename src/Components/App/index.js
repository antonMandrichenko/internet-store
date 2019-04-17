import React from 'react';
import { Switch, Route } from "react-router-dom";
import Layouts from '../../Components/Layouts/Index'
import { MuiThemeProvider } from '@material-ui/core/styles';
import Header from "../../Containers/Header/Index";
import CardProduct from "../../Components/CardProduct/Index";
import SignIn from "../../Containers/auth/SignInForm";
import AddReview from "../../Containers/ViewRewiews/AddReview/AddReview";
import Registered from "../../Containers/auth/RegisterForm";
import ShopCart from "../../Containers/ShopCart/Index";
import Checkout from "../../Components/Checkout";
import Dashboard from "../../Components/DashboardAdmin/Dashboard";
import AboutUs from "../../Components/AboutUs";
import ForCostumers from "../../Components/ForCostumers";
import { theme } from "./theme";

const App = () => {
    return (
      <MuiThemeProvider theme={theme}>
        <Header/>
        <Switch>
          <Route exact path="/" component={Layouts}/>
          <Route path="/products/:product" component={CardProduct}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/create-review" component={AddReview}/>
          <Route path="/register" component={Registered}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/shopcart" component={ShopCart}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/forcostumers" component={ForCostumers}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </MuiThemeProvider>
    );
};

export default App;

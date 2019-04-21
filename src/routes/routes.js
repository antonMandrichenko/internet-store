import Layouts from "../Components/Layouts/Index";
import CardProduct from "../Components/CardProduct/Index";
import SignIn from "../Containers/auth/SignInForm";
import AddReview from "../Containers/ViewRewiews/AddReview/AddReview";
import Registered from "../Containers/auth/RegisterForm";
import Dashboard from "../Components/DashboardAdmin/Dashboard";
import ShopCart from "../Containers/ShopCart/Index";
import Checkout from "../Components/Checkout";
import AboutUs from "../Components/AboutUs";
import ForCostumers from "../Components/ForCostumers";
import React from "react";

const routes = [
    {
      path: "/",
      component: Layouts,
      exact: true
    },
    {
      path: "/products/:id",
      component: CardProduct,
      exact: false
    },
    {
      path: "/signin",
      component: SignIn,
      exact: false
    },
    {
      path: "/create-review",
      component: AddReview,
      exact: false
    },
    {
      path: "/register",
      component: Registered,
      exact: false
    },
    {
      path: "/dashboard",
      component: Dashboard,
      exact: false
    },
    // {
    //   path: "/dashboard/categories",
    //   component: Dashboard,
    //   exact: true
    // },
    {
      path: "/dashboard/categories/list",
      component: Dashboard,
      exact: false
    },
    {
      path: "/dashboard/categories/create",
      component: Dashboard,
      exact: false
    },
    {
      path: "/dashboard/products/list",
      component: Dashboard,
      exact: false
    },
    {
      path: "/dashboard/products/create",
      component: Dashboard,
      exact: false
    },
    {
      path: "/dashboard/sales",
      component: Dashboard,
      exact: false
    },
  {
    path: "/dashboard/reviews",
    component: Dashboard,
    exact: false
  },
    {
      path: "/shopcart",
      component: ShopCart,
      exact: false
    },
    {
      path: "/checkout",
      component: Checkout,
      exact: false
    },
    {
      path: "/aboutus",
      component: AboutUs,
      exact: false
    },
    {
      path: "/forcostumers",
      component: ForCostumers,
      exact: false
    },
    {
      path: "/forcostumers",
      component: ForCostumers,
      exact: false
    },
  ];

export default routes;


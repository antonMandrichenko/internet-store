import React from "react";
import Layouts from "../Containers/Layouts/Index";
import CardProduct from "../Containers/CardProduct/Index";
import SignIn from "../Containers/auth/SignInForm";
import AddReview from "../Containers/ViewRewiews/AddReview/AddReview";
import Registered from "../Containers/auth/RegisterForm";
import Dashboard from "../Containers/DashboardAdmin/Dashboard";
import ShopCart from "../Containers/ShopCart/Index";
import Checkout from "../Containers/ShopCart/Checkout/Index";
import AboutUs from "../Components/AboutUs";


const routes = [
    {
      path: "/",
      component: Layouts,
      exact: true
    },
    {
      path: "/:category/products",
      component: Layouts,
      exact: true
    },
  {
    path: "/personalData",
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
  ];

export default routes;

